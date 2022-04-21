import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useMeldingen = (queryClient?: QueryClient) => {
    const API: APIService = React.useContext(APIContext);

    const getAll = () =>
        useQuery<any[], Error>("meldingen", API.Melding.getAll, {
            onError: (error) => {
                throw new Error(error.message);
            },
        });


    const getOne = (meldingId: string) => {
        if (!queryClient) {
            throw new Error('No queryClient passed');
        }
        return useQuery<any, Error>(["meldingen", meldingId], () => API.Product.getOne(productId), {
            onError: (error) => {
                throw new Error(error.message)
            },
            enabled: !!meldingId,
        });
    }

    return { getAll, getOne };
};
