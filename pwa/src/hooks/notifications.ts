import * as React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import { navigate } from "gatsby-link";
import { addItem } from "../services/mutateQueries";
import APIContext from "../apiService/apiContext";

export const useNotification = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getAll = () =>
    useQuery<any[], Error>("notifications", API.Notification.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  const getOne = (notificationId: string) =>
    useQuery<any, Error>(["notifications", notificationId], () => API.Notification.getOne(notificationId), {
      initialData: () =>
        queryClient.getQueryData<any[]>("notifications")?.find((notification) => notification.id === notificationId),
        onError: (error) => {
          throw new Error(error.message);
        },
      enabled: !!notificationId,
    });

  const createOrEdit = (notificationId?: string) =>
    useMutation<any, Error, any>(API.Notification.createOrUpdate, {
      onSuccess: async (newNotification) => {
        if (notificationId) {
          addItem(queryClient, "notifications", newNotification);
          navigate("/meldingen/overzicht");
        }

        if (!notificationId) {
          addItem(queryClient, "notifications", newNotification);
          navigate(`/meldingen/${newNotification.id}`);
        }
      },
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll, getOne, createOrEdit };
};
