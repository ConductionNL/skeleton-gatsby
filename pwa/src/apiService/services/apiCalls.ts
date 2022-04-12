import { Send } from "../apiService";
import { AxiosInstance, AxiosResponse } from "axios";

export default class APICalls {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }
  public getAll = (endpoint: string): Promise<AxiosResponse> => {
    return Send(this._instance, "GET", `/${endpoint}`);
  };

  public createObject = (endpoint: string, data: any): Promise<AxiosResponse> => {
    return Send(this._instance, "POST", `/${endpoint}`, data);
  };

  public updateObject = (endpoint: string, id: string, data: any): Promise<AxiosResponse> => {
    return Send(this._instance, "PUT", `/${endpoint}/${id}`, data);
  };
}
