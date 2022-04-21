import { Send } from "../apiService";
import { AxiosInstance, AxiosResponse } from "axios";

export default class Forms {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  //https://preprod-formulieren.buren.nl/wp-json/owc/v1/gf-formio/49
  // public getAll = async (): Promise<any> => {
  //   const { data } = await Send(this._instance, "GET", `https://localhost:8080/wp-json/owc/v1/gf-formio/1`);
  //   return data;
  // };

  
  public getOne = async (formId: string): Promise<any> => {
    const { data } = await Send(this._instance, "GET", `https://preprod-formulieren.buren.nl/wp-json/owc/v1/gf-formio/49`);
    return data;
  };

  public postForm = (formId: string, data: any): Promise<AxiosResponse> => {
    return Send(this._instance, "POST", `https://preprod-formulieren.buren.nl/wp-json/owc/v1/gf-formio/49`, data);
  };

}
