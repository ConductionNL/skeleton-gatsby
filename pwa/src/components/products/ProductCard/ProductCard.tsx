import * as React from "react";
import { Link } from "gatsby";
import "./ProductCard.css";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`} className="Product-Card" style={{ textDecoration: "none" }}>
        <span className="Product-title">{product.title}</span>
      </Link>
    </>
  );
};
