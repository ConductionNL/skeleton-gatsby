import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { ProductGrid } from "../components/products/ProductGrid/ProductGrid";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const UnauthenticatedTemplate: React.FC = () => {
  return (
    <>
      <Heading1>Welcome to the Skeleton Application</Heading1>

      <ProductGrid products={products} />
    </>
  );
};
