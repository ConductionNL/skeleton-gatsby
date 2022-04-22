import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class News {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  //https://openpub.buren.nl/wp-json/owc/openpub/v1/items/
  public getAll = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/wp-json/owc/openpub/v1/items/`);
    console.log(data)
    return data;
  };

  
  public getOne = async (nieuwsId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `/wp-json/owc/openpub/v1/items/${nieuwsId}`);
    return data;
  };

}