import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@utrecht/component-library-react/dist";
import { TopNav } from "./../../components/utrecht/topNav/TopNav";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { SelectLanguage } from "../../components/utrecht/selectLanguage/SelectLanguage";
import { GatsbyContext } from "../../context/gatsby";
import i18next, { changeLanguage, TFunction } from "i18next";
import { useTranslation } from "react-i18next";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

export const HeaderTemplate: React.FC = () => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);
  const { t } = useTranslation();

  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  React.useEffect(() => {
    setNavItems(getNavigationItems(gatsbyContext.location, t));
  }, [gatsbyContext.location, t]);

  return (
    <PageHeader className="HeaderTemplate">
      <TopNav items={navItems} />

      <div className="HeaderTemplate-subNav">
        <Breadcrumbs {...{ crumbs }} />

        <div className="HeaderTemplate-languageSwitcher">
          <SelectLanguage
            languages={[
              {
                label: "NL",
                key: "nl",
                title: "Deze pagina in Nederlands",
                onClick: () => changeLanguage("nl"),
                current: i18next.language === "nl",
              },
              {
                label: "EN",
                key: "en",
                title: "This page is in English",
                onClick: () => changeLanguage("en"),
                current: i18next.language === "en",
              },
            ]}
          />
        </div>
      </div>
    </PageHeader>
  );
};

const getNavigationItems = (location: any, t: TFunction): ITopNavItem[] => {
  const staticNavItems: ITopNavItem[] = [
    { title: t("Profile"), href: "/profile", current: location.pathname === "/profile" },
    { title: t("Settings"), href: "/settings", current: location.pathname === "/settings" },
  ];

  return [...staticNavItems];
};
