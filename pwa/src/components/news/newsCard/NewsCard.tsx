import * as React from "react";
import { Link as ULink } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";

interface NewsCardProps {
    news: any;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    return (
        <>
            {news.title && (
                <div className="NewsCard">
                    <span className="NewsName">{news.title}</span>
                    {/* <span>{`${news.description.substring(0, 57)}...`}</span> */}
                    {/* <span className="newsPrice">{centsToString(news.price.toString())}</span> */}

                    {/* <ULink> */}
                    {/* We want a Utrecht Link with gatsby Link functionality */}
                    <Link to={`/news/${news.id}`} className="utrecht-link">
                        Meer lezen
                    </Link>
                    {/* </ULink> */}
                </div>
            )}
        </>
    );
};