import * as React from "react";
import APIService from "../../apiService/apiService";
import APIContext from "../../apiService/apiContext";
import { Heading1, Article } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const ProductPage = (props: any) => {
  const productId: string = props.params.id === "new" ? null : props.params.id;
  const [product, setProduct] = React.useState(null);
  const API: APIService | null = React.useContext(APIContext);

  React.useEffect(() => {
    !product && getProduct();
  }, [API]);

  const getProduct = () => {
    API &&
      API.APICalls.getAPI(`products/${productId}`)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
  };

  return (
    <>
      <Heading1>{product && product.title} </Heading1>
      <br />
      <Article
        dangerouslySetInnerHTML={{
          __html: product?.content.replaceAll("<h2>", '<h2 class="utrecht-heading-2">'),
        }}
      />
    </>
  );
};

export default ProductPage;
