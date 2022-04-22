import * as React from "react";
import "../styling/index.css";
import "../translations/i18n";
import { Document, Page, PageContent } from "@utrecht/component-library-react/dist";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { SideNavTemplate } from "../templates/sideNav/SideNavTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";
import { TopNav } from "../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
import { useUrlContext } from "../context/urlContext";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

const LayoutKiss: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const { t } = useTranslation();
  const [API] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);
  const context = useUrlContext();

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  React.useEffect(() => {
    setNavItems(getNavigationItems(gatsbyContext.location, t));
  }, [gatsbyContext.location, t]);

  return (
    <GatsbyProvider value={gatsbyContext}>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/@nl-design-system-unstable/buren-design-tokens/dist/index.css`}
          type="text/css"
        />
      </Helmet>
      <Document className={`Document buren-theme`}>
        <TopNav items={navItems} />
        <SideNavTemplate />
        <Page className="Page">
          <HeaderTemplate />
          <PageContent className="PageContent">
            <APIProvider value={API}>
              <title>{t("Skeleton Application")}</title>
              {children}
            </APIProvider>
          </PageContent>
        </Page>
      </Document>
    </GatsbyProvider>
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
    { title: t("Profile"), href: "/profile", current: location.pathname === "/profile" },
    { title: t("Settings"), href: "/settings", current: location.pathname === "/settings" },
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

export default LayoutKiss;
