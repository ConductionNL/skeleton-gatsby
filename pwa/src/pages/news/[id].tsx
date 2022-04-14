import * as React from "react";
import APIService from "../../apiService/apiService";
import APIContext from "../../apiService/apiContext";
import { Heading1, Article } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const NewsPage = (props: any) => {
    const newsId: string = props.params.id === "new" ? null : props.params.id;
    const [news, setNews] = React.useState(null);
    const API: APIService = React.useContext(APIContext);

    React.useEffect(() => {
        !news && getNews();
    }, [API]);

    const getNews = () => {
        API.APICalls.getAPI(`news/${newsId}`)
            .then((res) => {
                setNews(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    };

    return (
        <>
            <Heading1>{news && news.title} </Heading1>
    <br />
    <Article
        dangerouslySetInnerHTML={{
        __html: news?.content.replaceAll("<h2>", '<h2 class="utrecht-heading-2">'),
    }}
    />
    </>
);
};

export default NewsPage;