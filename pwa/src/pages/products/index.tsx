import * as React from "react";
import { useQueryClient } from "react-query";
import { ProductGrid } from "../../components/products/ProductGrid/ProductGrid";
import { useProducts } from "../../hooks/products";

const ProductsIndex: React.FC = () => {
  const queryClient = useQueryClient();
  const _useProduct = useProducts(queryClient);
  const getProducts = _useProduct.getAll();

  // React.useEffect(() => {
  //   !products && getProducts;
  // }, [API]);

  // const getProducts = () => {
  //   API &&
  //     API.APICalls.getAPI("products")
  //       .then((res) => {
  //         res.data.total && setProducts(res.data.results);
  //       })
  //       .catch((err) => {
  //         throw new Error(err);
  //       });
  // };

  return <ProductGrid products={getProducts}></ProductGrid>;
};

export default ProductsIndex;
