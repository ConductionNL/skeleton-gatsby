import * as React from "react";
import "./Container.css";

export const Container: React.FC = (props) => {
  return (
    <div className="Container">
      <div className="Container-inner">{props.children}</div>
    </div>
  );
};
