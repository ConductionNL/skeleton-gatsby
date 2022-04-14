import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { ProductGrid } from "../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/products";

export const UnauthenticatedTemplate: React.FC = () => {
  const _useProduct = useProducts();
  const getProducts = _useProduct.getAll();

  if (getProducts.isLoading) return;
  if (getProducts.isFetching) return <>Fetching products..</>;
  if (getProducts.isError) return <>ERROR</>;

  return (
    <>
      <Heading1>Welcome to the Skeleton Application</Heading1>
      {getProducts.isLoading && <>Loading products..</>}
      {getProducts.isFetching && <>Fetching products..</>}
      {getProducts.isError && <>ERROR loading products</>}
      <ProductGrid products={getProducts.data ?? []} />
    </>
  );
};
