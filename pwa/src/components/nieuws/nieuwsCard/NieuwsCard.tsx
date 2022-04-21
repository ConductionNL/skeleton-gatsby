import * as React from "react";
import "./NieuwsCard.css";
import { Link } from "@utrecht/component-library-react/dist";

interface NieuwsCardProps {
  nieuws: any;
}

export const NieuwsCard: React.FC<NieuwsCardProps> = ({ nieuws }) => {
  var parts = nieuws?.content.split("<p>");
  var item = parts[0];
  console.log(item);

  return (
    <>
      <Link className="Nieuws-Card" href={`/nieuws/${nieuws?.id}`}>
        <div className="Nieuws-Container">
          <span className="Nieuws-image"><img src={nieuws?.image?.meta?.sizes?.medium?.url} /></span>
          <div className="Nieuws-Container-content">
            <span className="Nieuws-title">{nieuws?.title}</span>
            <span><p className="Nieuws-content-item">{new Date(nieuws?.date).toLocaleString("nl-NL")}</p></span>
          </div>
        </div>
      </Link>
    </>
  );
};
