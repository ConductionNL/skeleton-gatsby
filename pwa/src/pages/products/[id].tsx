import * as React from "react";
import { useQueryClient } from "react-query";
import { useProducts } from "../../hooks/products";
import { Heading1, Article } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const ProductPage = (props: any) => {
  const productId: string = props.params.id === "new" ? null : props.params.id;
  const queryClient = useQueryClient();
  const _useProduct = useProducts(queryClient);
  const getProduct = _useProduct.getOne(productId);

  return (
    <>
      {getProduct.data && (
        <>
          <Heading1>{getProduct.data && getProduct.data.title} </Heading1>
          <br />
          <Article
            dangerouslySetInnerHTML={{
              __html: getProduct.data?.content.replaceAll("<h2>", '<h2 class="utrecht-heading-2">'),
            }}
          />
        </>
      )}
    </>
  );
};

export default ProductPage;
