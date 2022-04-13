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
import { SearchBar } from "../../components/utrecht/searchBar/SearchBar";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

export const HeaderTemplate: React.FC = () => {
  const gatsbyContext = React.useContext(GatsbyContext);
  const [staticNavItems, setStaticNavItems] = React.useState<ITopNavItem[]>([]);
  const [userNavItem, setUserNavItem] = React.useState<ITopNavItem[]>([]);

  const {
    breadcrumb: { crumbs },
  } = gatsbyContext.pageContext;

  React.useEffect(() => {
    setStaticNavItems([
      { title: "Home", href: "/", current: location.pathname === "/" },
      { title: "Producten", href: "/producten", current: location.pathname === "/producten" },
      { title: "Nieuws", href: "/nieuws", current: location.pathname === "/nieuws" },
    ]);
    setUserNavItem(getUserNavItem(gatsbyContext.location));
  }, [gatsbyContext.location]);

  return (
    <PageHeader className="HeaderTemplate">
      <Logo className="HeaderTemplate-logo" />
      <div className="HeaderTemplate-topNav">
        <TopNav items={staticNavItems} />
        <SearchBar buttonLabel="Zoek" />
        <TopNav items={userNavItem} />
      </div>
      <Breadcrumbs {...{ crumbs }} />
    </PageHeader>
  );
};

const getUserNavItem = (location: any): ITopNavItem[] => {
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

  return [userNavItem];
};
