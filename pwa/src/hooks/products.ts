import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useProducts = (queryClient?: QueryClient) => {
  const API: APIService = React.useContext(APIContext);
  
  const getAll = () =>
    useQuery<any[], Error>("products", API.Product.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

    
  const getOne = (productId: string) => {
    if (!queryClient) {
      throw new Error('No queryClient passed');
    }
    return useQuery<any, Error>(["products", productId], () => API.Product.getOne(productId), {
      initialData: () =>
        queryClient.getQueryData<any[]>("products")?.find((product: any) => product.id === productId),
      onError: (error) => {
        throw new Error(error.message)
      },
      enabled: !!productId,
    });
  }

  return { getAll, getOne };
};
