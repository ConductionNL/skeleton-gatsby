import * as React from "react";
import "./NieuwsGrid.css";
import { NieuwsCard } from "../nieuwsCard/NieuwsCard";

interface NieuwsGridProps {
  nieuws: any;
}

export const NieuwsGrid: React.FC<NieuwsGridProps> = ({ nieuws }) => {
  return (
    <>
      {nieuws ? (
        <div className="Nieuws-Grid">
          {nieuws.map((item: any) => (
            <NieuwsCard nieuws={item} />
          ))}
        </div>
      ) : (
        <span>No nieuws found</span>
      )}
    </>
  );
};
