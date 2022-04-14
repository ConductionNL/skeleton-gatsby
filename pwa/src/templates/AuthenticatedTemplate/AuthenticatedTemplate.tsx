import * as React from "react";
import "./AuthenticatedTemplate.css";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { SideNav } from "../../components/utrecht/sideNav/SideNav";
import { GatsbyContext } from "./../../context/gatsby";
import i18next, { t } from "i18next";

export interface ISideNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
  children?: {
    href: string;
    title: string;
    current?: boolean;
  }[];
}

export const AuthenticatedTemplate: React.FC = ({ children }) => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const [SideNavItem, setSideNavItems] = React.useState<ISideNavItem[]>([]);

  React.useEffect(() => {
    i18next.on("languageChanged", () => setSideNavItems(getSideNavItems(gatsbyContext.location)));
  }, []);

  React.useEffect(() => {
    setSideNavItems(getSideNavItems(gatsbyContext.location));
  }, [gatsbyContext.location]);

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
  const NotificationsTitle = <>{t("Notifications")}</>;

  return [
    {
      href: "/meldingen",
      title: NotificationsTitle,
      current: location.pathname === "/meldingen",
    },
  ];
};
