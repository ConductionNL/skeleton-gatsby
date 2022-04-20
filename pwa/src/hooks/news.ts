import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useNews = (queryClient?: QueryClient) => {
  const API: APIService = React.useContext(APIContext);
  
  const getAll = () =>
    useQuery<any[], Error>("nieuws", API.News.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

    
  const getOne = (newsId: string) => {
    if (!queryClient) {
      throw new Error('No queryClient passed');
    }
    return useQuery<any, Error>(["nieuws", newsId], () => API.News.getOne(newsId), {
      initialData: () =>
        queryClient.getQueryData<any[]>("nieuws")?.find((news: any) => news.id === newsId),
      onError: (error) => {
        throw new Error(error.message)
      },
      enabled: !!newsId,
    });
  }

  return { getAll, getOne };
};
