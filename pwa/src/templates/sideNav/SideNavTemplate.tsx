import * as React from "react";
import { GatsbyContext } from "../../context/gatsby";
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";
import { ISideNavItem, SideNav } from "../../components/utrecht/sideNav/SideNav";
import "./SideNavTemplate.css";



export const SideNavTemplate: React.FC = () => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const { t } = useTranslation();
  
  const [sideNavItems, setSideNavItems] = React.useState<ISideNavItem[] | null>(null);

  React.useEffect(() => {
    !sideNavItems && setSideNavItems(getSideNavItems(gatsbyContext.location));
    i18next.on("languageChanged", () => setSideNavItems(getSideNavItems(gatsbyContext.location)));
  }, [gatsbyContext.location]);
  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  return (
 
    <SideNav className="sideNav" items={sideNavItems ?? []} />

  );
};

const getSideNavItems = (location: any): ISideNavItem[] => {
  return [
    {
      href: "/meldingen",
      title: t("Notifications"),
      current: location.pathname === "/meldingen",
    },
    {
      href: "/nieuws",
      title: t("News"),
      current: location.pathname === "/nieuws",
    },
  ];
};

