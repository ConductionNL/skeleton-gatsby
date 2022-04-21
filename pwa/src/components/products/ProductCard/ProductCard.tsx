import * as React from "react";
import { Link } from "gatsby";
import "./ProductCard.css";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <div className="Product-Card">
        <span className="Product-title">{product.title}</span>
        <Link to={`/products/${product.id}`}>Bekijken</Link>
      </div>
    </>
  );
};
