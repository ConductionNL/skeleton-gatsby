import * as React from "react";
import "../styling/index.css";
import "./../translations/i18n";
import { Document, Page, PageContent } from "@utrecht/component-library-react/dist";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import Footer from "./../components/footer/Footer";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { TFunction, useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopNav } from "../components/utrecht/topNav/TopNav";
import { getUsername, isLoggedIn } from "../services/auth";
import { useUrlContext } from "../context/urlContext";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const { t } = useTranslation();
  const [API] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });
  const [navItems, setNavItems] = React.useState<ITopNavItem[]>([]);
  const context = useUrlContext();

  React.useEffect(() => {
    setNavItems(getNavigationItems(gatsbyContext.location, t));
  }, [gatsbyContext.location, t]);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/@nl-design-system-unstable/${context.defaultTheme}-design-tokens/dist/index.css`}
          type="text/css"
        />
      </Helmet>
      <GatsbyProvider value={gatsbyContext}>
        <Document className={`Document ${context.defaultTheme}-theme`}>
          <TopNav items={navItems} />
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
    </>
  );
};

export default Layout;

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
