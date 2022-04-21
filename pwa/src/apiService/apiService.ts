import axios, { AxiosInstance, AxiosResponse } from "axios";
import Login from "./services/login";
import Notification from "./resources/notification";
import Product from "./resources/product";
import News from "./resources/news";
import Forms from './resources/forms';

export default class APIService {
  public JWT?: string;

  public removeAuthentication(): void {
    this.JWT = undefined;
  }

  public setAuthentication(_JWT: string): void {
    this.JWT = _JWT;
  }

  public get authenticated(): boolean {
    return this.JWT ? true : false;
  }

  public get pdcClient(): AxiosInstance {
    return axios.create({
      baseURL: "https://pdc.buren.nl",
      headers :{
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  public get pubClient(): AxiosInstance {
    return axios.create({
      baseURL: "https://openpub.buren.nl",
      headers :{
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
  
  public get apiClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers : this.JWT ? {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.JWT}`
    } : {
      Accept: "application/json",
      "Content-Type": "application/json"
    }});
  }

  public get LoginClient(): AxiosInstance {
    return axios.create({
      baseURL: process.env.GATSBY_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });
  }

  public get FormioClient(): AxiosInstance {
    return axios.create({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });
  }

  // Services
  public get Login(): Login {
    return new Login(this.LoginClient);
  }

  // Resources
  public get Notification(): Notification {
    return new Notification(this.apiClient);
  }

  // Resources
  public get Product(): Product {
    return new Product(this.pdcClient);
  }

  public get News(): News {
    return new News(this.pubClient);
  }

  public get Forms(): Forms {
    return new Forms(this.FormioClient);
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
