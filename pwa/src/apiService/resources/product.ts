import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Product {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  //https://pdc.buren.nl/wp-json/owc/pdc/v1/items?limit=100
  public getAll = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/wp-json/owc/pdc/v1/items?limit=100`);
    console.log(data)
    return data;
  };

  
  public getOne = async (productId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/wp-json/owc/pdc/v1/items/${productId}`);
    return data;
  };

}
