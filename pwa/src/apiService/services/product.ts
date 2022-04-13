import { Send } from "../apiService";
import { AxiosInstance, AxiosResponse } from "axios";

export default class Product {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }
  public getAll = (): Promise<AxiosResponse> => {
    return Send(this._instance, "GET", `/products`);
  };

  public getOne = (productId: string): Promise<AxiosResponse> => {
    return Send(this._instance, "GET", `/products/${productId}`);
  };

}
