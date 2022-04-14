import * as React from "react";
import APIService from "../apiService/apiService";

export const PrivateApiContext = React.createContext<APIService>(new APIService());

export const PrivateApiProvider = PrivateApiContext.Provider;
