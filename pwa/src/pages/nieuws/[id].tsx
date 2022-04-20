import * as React from "react";
import { useQueryClient } from "react-query";
import { Heading1, Article } from "@utrecht/component-library-react/dist";
import { useNews } from "../../hooks/news";

const NieuwsPage = (props: any) => {
  const nieuwsId: string = props.params.id === "new" ? null : props.params.id;
  const queryClient = useQueryClient();
  const _useNieuws = useNews(queryClient);
  const getNieuws = _useNieuws.getOne(nieuwsId);

  return (
    <>
      {getNieuws.data && (
        <>
          <Heading1>{getNieuws.data && getNieuws.data.title} </Heading1>
          <br />
          <Article
            dangerouslySetInnerHTML={{
              __html: getNieuws.data?.content?.replaceAll("<h2>", '<h2 class="utrecht-heading-2">'),
            }}
          />
        </>
      )}
    </>
  );
};

export default NieuwsPage;
