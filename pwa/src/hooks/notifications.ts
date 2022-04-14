import * as React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import { PrivateApiContext } from "../context/privateApi";
import { navigate } from "gatsby-link";
import { addItem } from "../services/mutateQueries";

export const useNotification = (queryClient: QueryClient) => {
  const privateApi: APIService = React.useContext(PrivateApiContext);

  const getAll = () =>
    useQuery<any[], Error>("notifications", privateApi.Notification.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  const create = () =>
    useMutation<any, Error, any>(privateApi.Notification.create, {
      onSuccess: async (newNotification) => {
        addItem(queryClient, "notifications", newNotification);
        navigate("/meldingen/overzicht");
      },
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll, create };
};
