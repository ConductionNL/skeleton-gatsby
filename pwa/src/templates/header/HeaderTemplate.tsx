import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";
import { SelectLanguage } from "../../components/utrecht/selectLanguage/SelectLanguage";
import { GatsbyContext } from "../../context/gatsby";
import i18next, { changeLanguage, TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { TopNav } from "../../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

export const HeaderTemplate: React.FC = () => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const { t } = useTranslation();
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);

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
      </div>
    </PageHeader>
  );
};

const getNavigationItems = (location: any, t: Function): ITopNavItem[] => {
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
    { title: t("Nieuws"), href: "/nieuws", current: location.pathname === "/nieuws" },
    { title: t("Producten"), href: "/products", current: location.pathname === "/products" },
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
