import * as React from "react";
import "./HeaderTemplate.css";
import { PageHeader } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { TopNav } from "../../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../assets/logo.svg";
import { Breadcrumbs } from "../../components/utrecht/breadcrumbs/Breadcrumbs";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

interface IHeaderTemplateProps {
  location: any; // Gatsby location
  crumbs: any; // Gatsby breadcrumbs crumbs
}

export const HeaderTemplate: React.FC<IHeaderTemplateProps> = ({ location, crumbs }) => {
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);

  React.useEffect(() => {
    setNavItems(getNavigationItems(location));
  }, [location]);

  return (
    <PageHeader className="HeaderTemplate">
      <Logo className="HeaderTemplate-logo" />
      <TopNav items={navItems} />
      <Breadcrumbs {...{ crumbs }} />
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
      Login <FontAwesomeIcon icon={faLockOpen} />
    </>
  );

  const staticNavItems: ITopNavItem[] = [
    { title: "Home", href: "/", current: location.pathname === "/" },
    { title: "Producten", href: "/producten", current: location.pathname === "/producten" },
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
