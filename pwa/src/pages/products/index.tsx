import * as React from "react";
import { ProductGrid } from "../../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../../hooks/products";

const ProductsIndex: React.FC = () => {
  const _useProduct = useProducts();
  const getProducts = _useProduct.getAll();

  if (getProducts.isLoading) return <>Loading products..</>;
  if (getProducts.isFetching) return <>Fetching products..</>;
  if (getProducts.isError) return <>ERROR</>;
  return <ProductGrid products={getProducts.data ?? []} />;
};

export default ProductsIndex;
