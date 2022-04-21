import * as React from "react";
import "./AuthenticatedTemplate.css";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { ISideNavItem, SideNav } from "../../components/utrecht/sideNav/SideNav";
import { GatsbyContext } from "./../../context/gatsby";
import i18next, { t } from "i18next";

export const AuthenticatedTemplate: React.FC = ({ children }) => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const [sideNavItems, setSideNavItems] = React.useState<ISideNavItem[] | null>(null);

  React.useEffect(() => {
    !sideNavItems && setSideNavItems(getSideNavItems(gatsbyContext.location));
    i18next.on("languageChanged", () => setSideNavItems(getSideNavItems(gatsbyContext.location)));
  }, [gatsbyContext.location]);

  return (
    <PrivateRoute>
      <div className="AuthenticatedTemplate">
        <SideNav className="AuthenticatedTemplate-sideNav" items={sideNavItems ?? []} />

        <div className="AuthenticatedTemplate-children">{children}</div>
      </div>
    </PrivateRoute>
  );
};

const getSideNavItems = (location: any): ISideNavItem[] => {
  return [
    {
      href: "/meldingen",
      title: t("Notifications"),
      current: location.pathname === "/meldingen",
      children: [
        {
          href: "/meldingen/formulier",
          title: "Melding doen",
          current: location.pathname === "/meldingen/formulier",
        },
        {
          href: "/meldingen/overzicht",
          title: t("Notifications overview"),
          current: location.pathname === "/meldingen/overzicht",
        },
      ],
    },
  ];
};
