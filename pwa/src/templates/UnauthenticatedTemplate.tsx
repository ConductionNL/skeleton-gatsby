import * as React from "react";
import { Button, Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";
import { ProductGrid } from "../components/products/ProductGrid/ProductGrid";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const UnauthenticatedTemplate: React.FC = () => {
  const [products, setProducts] = React.useState(null);
  const API: APIService | null = React.useContext(APIContext);

  React.useEffect(() => {
    !products && getProducts();
  }, [API]);

  const getProducts = () => {
    API &&
      API.APICalls.getAll("products")
        .then((res) => {
          res.data.total && setProducts(res.data.results);
        })
        .catch((err) => {
          throw new Error(err);
        });
  };

  return (
    <>
      <Heading1>Welcome to the Skeleton Application</Heading1>

      <Link to="/login">
        <Button>Login</Button>
      </Link>

      <ProductGrid products={products} />
    </>
  );
};
