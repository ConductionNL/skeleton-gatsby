import * as React from "react";
import { ProductGrid } from "../../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../../hooks/products";

const ProductsIndex: React.FC = () => {
  const _useProduct = useProducts();
  const getProducts = _useProduct.getAll();

  return <>{getProducts.data && <ProductGrid products={getProducts.data ?? []} />}</>;
};

export default ProductsIndex;
