import * as React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import { navigate } from "gatsby-link";
import { addItem } from "../services/mutateQueries";

export const useNotification = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);
  
  const getAll = () =>
    useQuery<any[], Error>("notifications", API.Notification.getAll, {
      onError: (error) => {
      },
    });

  const create = () =>
    useMutation<any, Error, any>(API.Notification.create, {
      onSuccess: async (newNotification) => {
          addItem(queryClient, "notifications", newNotification);
          navigate("/meldingen/overview")
      },
      onError: (error) => {
      },
    });

  return { getAll, create };
};
