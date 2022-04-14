import * as React from "react";
import "./ProductGrid.css";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: any;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <>
      {products ? (
        <div className="ProductGrid">
          {/* {products.map((item: any) => (
            <ProductCard product={item} />
          ))} */}
        </div>
      ) : (
        <span>No products found</span>
      )}
    </>
  );
};
