import * as React from "react";
import "./AuthenticatedTemplate.css";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { GatsbyContext } from "./../../context/gatsby";

export const AuthenticatedTemplate: React.FC = ({ children }) => {
  const gatsbyContext = React.useContext(GatsbyContext);

  return (
    <PrivateRoute>
      <div className="AuthenticatedTemplate">
        <div className="AuthenticatedTemplate-children">{children}</div>
      </div>
    </PrivateRoute>
  );
};
