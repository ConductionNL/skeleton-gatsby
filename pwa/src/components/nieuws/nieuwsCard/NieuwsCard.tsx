import * as React from "react";
import { Link as ULink } from "@utrecht/component-library-react/dist";
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
