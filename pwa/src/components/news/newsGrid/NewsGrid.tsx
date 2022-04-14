import * as React from "react";
import "./NewsGrid.css";
import { NewsCard } from "../newsCard/NewsCard";

interface NewsGridProps {
    News: any;
}

export const NewsGrid: React.FC<NewsGridProps> = ({ News }) => {
    return (
        <>
            {News ? (
                <div className="NewsGrid">{News && News.map((item: any) => <NewsCard news={item} />)}</div>
            ) : (
                <span>No News found</span>
            )}
        </>
    );
};