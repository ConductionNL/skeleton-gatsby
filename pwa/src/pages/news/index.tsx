import * as React from "react";
import { useQueryClient } from "react-query";
import { NewsGrid } from "../../components/News/NewsGrid/NewsGrid";
import { useNews } from "../../hooks/news";

const NewsIndex: React.FC = () => {
  const queryClient = useQueryClient();
  const _useNews = useNews(queryClient);
  const getNews = useNews.getAll();

  // React.useEffect(() => {
  //   !news && getNews;
  // }, [API]);

  // const getNews = () => {
  //   API &&
  //     API.APICalls.getAPI("news")
  //       .then((res) => {
  //         res.data.total && setNews(res.data.results);
  //       })
  //       .catch((err) => {
  //         throw new Error(err);
  //       });
  // };

  return <NewsGrid news={getNews}></NewsGrid>;
};

export default NewsIndex;
