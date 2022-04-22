import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useForms = (queryClient?: QueryClient) => {
  const API: APIService = React.useContext(APIContext);
  
  // const getAll = () =>
  //   useQuery<any[], Error>("nieuws", API.News.getAll, {
  //     onError: (error) => {
  //       throw new Error(error.message);
  //     },
  //   });

    
  const getOne = (formId: string) => {
    if (!queryClient) {
      throw new Error('No queryClient passed');
    }
    return useQuery<any, Error>(["form", formId], () => API.Forms.getOne(formId), {
      onError: (error) => {
        throw new Error(error.message)
      },
      enabled: !!formId,
    });
  }

  return { getOne };
};
