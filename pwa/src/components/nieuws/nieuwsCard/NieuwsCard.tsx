import * as React from "react";
import { Link as ULink } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";
import "./NieuwsCard.css";

interface NieuwsCardProps {
  nieuws: any;
}

export const NieuwsCard: React.FC<NieuwsCardProps> = ({ nieuws }) => {
  return (
    <>
      <div className="Nieuws-Card">
        <span className="Nieuws-title">{nieuws?.title}</span>

        <Link to={`/nieuws/${nieuws?.id}`}>Bekijken</Link>
      </div>
    </>
  );
};
