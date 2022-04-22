import * as React from "react";
import "./NieuwsGrid.css";
import { NieuwsCard } from "../nieuwsCard/NieuwsCard";

interface NieuwsGridProps {
  nieuws: any;
}

export const NieuwsGrid: React.FC<NieuwsGridProps> = ({ nieuws }) => {
  return (
    <>
      {nieuws?.data ? (
        <div className="Nieuws-Grid">
          {nieuws.data.map((item: any, idx: number) => (
            <NieuwsCard key={idx} nieuws={item} />
          ))}
        </div>
      ) : (
        <span>No nieuws found</span>
      )}
    </>
  );
}