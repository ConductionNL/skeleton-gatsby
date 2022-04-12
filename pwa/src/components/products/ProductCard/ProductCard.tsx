import * as React from "react";
import { centsToString } from "../../../services/utility";
import { Link as ULink } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";

interface ProductCardProps {
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="ProductCard">
      <span className="ProductName">{product.name}</span>
      <span>{`${product.description.substring(0, 57)}...`}</span>
      <span className="ProductPrice">{centsToString(product.price.toString())}</span>

      {/* <ULink> */}
      <Link to={`/producsts/${product.id}`} className="utrecht-link">
        Bekijken
      </Link>
      {/* </ULink> */}
    </div>
  );
};
