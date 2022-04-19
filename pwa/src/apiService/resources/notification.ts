import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Notification {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", "/notifications");
    return data.results;
  };

  public getOne = async (id: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/notifications/${id}`);
    return data;
  };

  public createOrUpdate = async (variables: { payload: any; id: string }): Promise<any> => {
    const { payload, id } = variables;
  
    if (id) {
      const { data } = await Send(this._instance, "PUT", `/notifications/${id}`, payload);
      return data;
    }
  
    const { data } = await Send(this._instance, "POST", "/notifications", payload);
    return data;
  };
}
