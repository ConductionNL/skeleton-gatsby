import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UrlContextWrapper } from "./src/context/urlContext";

export const wrapRootElement = ({ element }) => {
  const queryClient = new QueryClient();

  return (
    <UrlContextWrapper>
      <QueryClientProvider client={queryClient}>
        {element}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UrlContextWrapper>
  );
};
