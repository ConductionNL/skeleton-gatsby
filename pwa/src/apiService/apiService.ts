import axios, { AxiosInstance, AxiosResponse } from "axios";
import { handleLogout, validateSession } from "../services/auth";
import Login from "./services/login";
import Notification from "./resources/notification";

export default class APIService {
  public JWT?: string;

  public removeAuthentication(): void {
    this.JWT = undefined;
    sessionStorage.removeItem("JWT");
  }

  public setAuthentication(_JWT: string): void {
    this.JWT = _JWT;
    sessionStorage.setItem("JWT", _JWT);
  }

  public get authenticated(): boolean {
    return this.JWT ? true : false;
  }

  // Clients
  public get adminClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_ADMIN_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.JWT,
      },
    });
  }

  public get apiClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.JWT,
      },
    });
  }

  public get loginClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  // Services
  public get Login(): Login {
    return new Login(this.loginClient);
  }

  // Resources
  public get Notification(): Notification {
    return new Notification(this.apiClient);
  }
}

export const Send = (
  instance: AxiosInstance,
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  payload?: JSON,
): Promise<AxiosResponse> => {
  const _payload = JSON.stringify(payload);

  switch (method) {
    case "GET":
      return instance.get(endpoint);
    case "POST":
      return instance.post(endpoint, _payload);
    case "PUT":
      return instance.put(endpoint, _payload);
    case "DELETE":
      return instance.delete(endpoint);
  }
};
