import * as React from "react";
import "../styling/index.css";
import "./../translations/i18n";
import { Document, Page, PageContent } from "@utrecht/component-library-react/dist";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import Footer from "./../components/footer/Footer";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const { t } = useTranslation();
  const [API] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

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
          href={`https://unpkg.com/@conductionnl/buren-design-tokens/dist/index.css`}
        />
      </Helmet>
      <GatsbyProvider value={gatsbyContext}>
        <Document className="Document">
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
