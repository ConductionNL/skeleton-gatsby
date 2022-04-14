import { Send } from "../apiService";
import { AxiosInstance, AxiosResponse } from "axios";

export default class Product {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const {data} = await Send(this._instance, "GET", `/products`);
    return data.results;
  };

  public getOne = async (productId: string): Promise<any> => {
    const {data} = await Send(this._instance, "GET", `/products/${productId}`);
    return data;
  };

}
