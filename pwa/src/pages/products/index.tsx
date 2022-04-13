import * as React from "react";
import { ProductGrid } from "../../components/products/ProductGrid/ProductGrid";
import APIService from "../../apiService/apiService";
import APIContext from "../../apiService/apiContext";

const ProductsIndex: React.FC = () => {
  const [products, setProducts] = React.useState(null);
  const API: APIService | null = React.useContext(APIContext);

  React.useEffect(() => {
    !products && getProducts();
  }, [API]);

  const getProducts = () => {
    API &&
      API.APICalls.getAPI("products")
        .then((res) => {
          res.data.total && setProducts(res.data.results);
        })
        .catch((err) => {
          throw new Error(err);
        });
  };

  return <ProductGrid products={products}></ProductGrid>;
};

export default ProductsIndex;
