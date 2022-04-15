import * as React from "react";
import { ProductGrid } from "../../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../../hooks/products";
import { useTranslation } from "react-i18next";

const ProductsIndex: React.FC = () => {
  const { t } = useTranslation();
  const _useProduct = useProducts();
  const getProducts = _useProduct.getAll();

  return (
    <>
      {getProducts.isLoading
        ? `${t("Loading")} ${t("products")}..`
        : getProducts.isFetching
        ? `${t("Fetching")} ${t("products")}..`
        : getProducts.isError && "ERROR"}
      {getProducts.data && <ProductGrid products={getProducts.data ?? []} />}
    </>
  );
};

export default ProductsIndex;
