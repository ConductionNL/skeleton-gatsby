import axios, { AxiosInstance, AxiosResponse } from "axios";
import Login from "./services/login";
import ApiCalls from "./resources/apiCalls";
import { isLoggedIn, logout, validateSession } from "../services/auth";

export default class APIService {
  private _jwtToken: string;

  constructor(_jwtToken: string) {
    this._jwtToken = _jwtToken;
  }

  // Clients
  public get apiClient(): AxiosInstance {
    return axios.create({
      baseURL: window.GATSBY_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this._jwtToken,
      },
    });
  }

  public get loginClient(): AxiosInstance {
    return axios.create({
      baseURL: window.GATSBY_API_URL ?? 'http://localhost/api',
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

  public get ApiCalls(): ApiCalls {
    return new ApiCalls(this.apiClient);
  }
}

export const Send = (
  instance: AxiosInstance,
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  payload?: JSON,
): Promise<AxiosResponse> => {
  const _payload = JSON.stringify(payload);

  if (!validateSession()) {
    logout();

    return Promise.resolve({
      // return fake AxiosInstance for calls to not break
      data: [],
      status: -1,
      statusText: "Session invalid",
      config: {},
      headers: {},
    });
  }

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
