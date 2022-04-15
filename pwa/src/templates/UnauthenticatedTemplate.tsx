import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { ProductGrid } from "../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../hooks/products";
import { useTranslation } from "react-i18next";

export const UnauthenticatedTemplate: React.FC = () => {
  const _useProduct = useProducts();
  const getProducts = _useProduct.getAll();

  const { t } = useTranslation();
  return (
    <>
      <Heading1>{t("Welcome to the Skeleton Application")}</Heading1>
      <ProductGrid products={getProducts.data ?? []} />
    </>
  );
};
