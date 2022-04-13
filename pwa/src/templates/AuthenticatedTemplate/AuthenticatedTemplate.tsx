import * as React from "react";
import "./AuthenticatedTemplate.css";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { ISideNavItem, SideNav } from "../../components/utrecht/sideNav/SideNav";
import { GatsbyContext } from "./../../context/gatsby";

export const AuthenticatedTemplate: React.FC = ({ children }) => {
  const gatsbyContext = React.useContext(GatsbyContext);

  return (
    <PrivateRoute>
      <div className="AuthenticatedTemplate">
        <SideNav className="AuthenticatedTemplate-sideNav" items={getSideNavItems(gatsbyContext.location)} />

        <div className="AuthenticatedTemplate-children">{children}</div>
      </div>
    </PrivateRoute>
  );
};

const getSideNavItems = (location: any): ISideNavItem[] => {
  return [
    {
      href: "/meldingen",
      title: "Meldingen",
      current: location.pathname === "/meldingen",
    },
  ];
};
