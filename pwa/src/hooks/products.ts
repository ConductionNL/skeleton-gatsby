import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useProducts = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);
  
  const getAll = () =>
    useQuery<any[], Error>("products", API.Product.getAll, {
      onError: (error) => {
      },
    });

  const getOne = () =>
    useQuery<any[], Error>("products", API.Product.getOne, {
      onError: (error) => {
      },
    });


  return { getAll, getOne };
};
