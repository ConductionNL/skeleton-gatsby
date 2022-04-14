import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useProducts = () => {
  const API: APIService = React.useContext(APIContext);
  
  const getAll = () =>
    useQuery<any[], Error>("products", API.Product.getAll, {
      onError: (error) => {
        console.log(error);
      },
    });

  const getOne = (productId: string) =>
    useQuery<any[], Error>(`product`, API.Product.getOne(productId), {
      onError: (error) => {
      },
    });


  return { getAll, getOne };
};
