import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

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
    </>
  );
};
