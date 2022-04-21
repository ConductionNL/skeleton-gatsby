import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@utrecht/component-library-react/dist";
import { TopNav } from "../../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../../services/auth";
import Logo from "./../../assets/logo.svg";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { GatsbyContext } from "./../../context/gatsby";
import i18next, { changeLanguage, TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "../../components/utrecht/selectLanguage/SelectLanguage";
import {faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Logo className="HeaderTemplate-logo" />
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
  const loggedInTitle = (
    <>
        {getUsername()} <FontAwesomeIcon icon={faLock} />
    </>
  );

  const loggedOutTitle = (
    <>
        {t("Login")} <FontAwesomeIcon icon={faLockOpen} />
    </>
  );

  const staticNavItems: ITopNavItem[] = [
    { title: "Producten", href: "/products", current: location.pathname === "/products" },
    { title: "Nieuws", href: "/nieuws", current: location.pathname === "/nieuws" },
  ];

  const userNavItem: ITopNavItem = isLoggedIn()
    ? {
        title: loggedInTitle,
        href: "/logout",
      }
    : {
        title: loggedOutTitle,
        href: "/login",
        current: location.pathname === "/login",
      };

  return [...staticNavItems, userNavItem];
};
