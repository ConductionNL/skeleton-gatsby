import * as React from "react";
import "./ProductGrid.css";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: Array<any> | null;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <>
      {products ? (
        <div className="ProductGrid">{products && products.map((item: any) => <ProductCard product={item} />)}</div>
      ) : (
        <span>No products found</span>
      )}
    </>
  );
};
