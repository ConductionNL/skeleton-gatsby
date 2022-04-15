import * as React from "react";
import { centsToString } from "../../../services/utility";
import { Link as ULink } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      {/* {product.title && ( */}
      <div className="ProductCard">
        <span className="ProductName">{product.title}</span>

        {/* <ULink> */}
        {/* We want a Utrecht Link with gatsby Link functionality */}
        <Link to={`/products/${product.id}`}>Bekijken</Link>
        {/* </ULink> */}
      </div>
      {/* )}  */}
    </>
  );
};
