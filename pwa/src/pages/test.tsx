import React, { useEffect, useState } from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import { ProductGrid } from "../components/products/ProductGrid/ProductGrid";

const ExamplePage = (props: any) => {
  const [products, setProducts] = useState<any>(null);
  const API: APIService = React.useContext(APIContext);
  // function setAlert(arg0: { message: any; type: string }) {
  //   throw new Error("Function not implemented.");
  // }

  useEffect(() => {
    handleSetProducts();
  });

  const handleSetProducts = (): void => {
    API.Product.getAll().then((res) => {
      console.log(res.data);

      setProducts(res.data.content);
    });
    // .catch((err) => {
    //   setAlert({ message: err, type: "danger" });
    //   throw new Error("GET products error: " + err);
    // });
  };
  return (
    <>
      <h1>Example </h1>
      <ProductGrid products={products} />
    </>
  );
};

export default ExamplePage;
