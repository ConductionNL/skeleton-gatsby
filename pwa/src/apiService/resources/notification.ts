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

  public getOne = async (notificationId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/wp-json/owc/pdc/v1/items/${notificationId}`);
    return data;
  };

  public create = async (variables: { payload: any }): Promise<any> => {
    const { payload } = variables;
    const { data } = await Send(this._instance, "POST", "/notifications", payload);
    return data;
  };
}
