import { Send } from "../apiService";
import { AxiosInstance, AxiosResponse } from "axios";

export default class News {
    private _instance: AxiosInstance;

    constructor(_instance: AxiosInstance) {
        this._instance = _instance;
    }
    public getAll = (): Promise<AxiosResponse> => {
        return Send(this._instance, "GET", `/news`);
    };

    public getOne = (newsId: string): Promise<AxiosResponse> => {
        return Send(this._instance, "GET", `/news/${newsId}`);
    };

}