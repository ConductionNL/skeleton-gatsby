import * as React from "react";
import "../styling/index.css";
import "./../translations/i18n";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { isLoggedIn } from "../services/auth";
import { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import Footer from "./../components/footer/Footer";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const { t } = useTranslation();
  const [API, setAPI] = React.useState<APIService | null>(null);
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });
  }, [pageContext, location]);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      setAPI(null);
      return;
    }

    const jwt = sessionStorage.getItem("jwt");
    !API && jwt && setAPI(new APIService(jwt));
  }, [API, isLoggedIn()]);

  return (
    <GatsbyProvider value={gatsbyContext}>
      <Document>
        <Page className="Page">
          <HeaderTemplate />
          <PageContent className="PageContent">
            <APIProvider value={API}>
              <title>{t("Skeleton Application")}</title>
              {children}
            </APIProvider>
          </PageContent>
          <Footer />
        </Page>
      </Document>
    </GatsbyProvider>
  );
};

export default Layout;
