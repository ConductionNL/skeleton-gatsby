import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { TopNav } from "../../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../assets/logo.svg";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { GatsbyContext } from "./../../context/gatsby";
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage, t } from "i18next";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

export const HeaderTemplate: React.FC = () => {
  const { t } = useTranslation();
  const gatsbyContext = React.useContext(GatsbyContext);
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);

  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  React.useEffect(() => {
    i18next.on("languageChanged", () => setNavItems(getNavigationItems(gatsbyContext.location)));
  }, []);

  React.useEffect(() => {
    setNavItems(getNavigationItems(gatsbyContext.location));
  }, [gatsbyContext.location]);

  return (
    <PageHeader className="HeaderTemplate">
      <Logo className="HeaderTemplate-logo" />
      <TopNav items={navItems} />

      <div className="HeaderTemplate-subNav">
        <Breadcrumbs {...{ crumbs }} />

        <div className="switcher">
          <button onClick={() => changeLanguage("en")}>Change to EN</button>
          <button onClick={() => changeLanguage("nl")}>Change to NL</button>
        </div>
      </div>
    </PageHeader>
  );
};

const getNavigationItems = (location: any): ITopNavItem[] => {
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
    { title: t("Home"), href: "/", current: location.pathname === "/" },
    { title: t("Products"), href: "/producten", current: location.pathname === "/producten" },
    { title: t("News"), href: "/nieuws", current: location.pathname === "/nieuws" },
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
