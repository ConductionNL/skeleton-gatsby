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

  const create = () =>
    useMutation<any, Error, any>(API.Notification.create, {
      onSuccess: async (newNotification) => {
        addItem(queryClient, "notifications", newNotification);
        navigate("/meldingen/overzicht");
      },
      onError: (error) => {
        throw new Error(error.message);
      },
    });

    const getOne = (notificationId: string) => {
        if (!queryClient) {
            throw new Error('No queryClient passed');
        }
        return useQuery<any, Error>(["notification", notificationId], () => API.Notification.getOne(notificationId), {
            onError: (error) => {
                throw new Error(error.message)
            },
            enabled: !!notificationId,
        });
    }

  return { getAll, create , getOne};
};
