import * as React from "react";
import "../styling/index.css";
import "../translations/i18n";
import { Document, Page, PageContent } from "@utrecht/component-library-react/dist";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { SideNavTemplate } from "../templates/sideNav/SideNavTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
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

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

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
        <Page className="Page">
          <PageContent className="PageContent">
            <HeaderTemplate />
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

export default LayoutKiss;
