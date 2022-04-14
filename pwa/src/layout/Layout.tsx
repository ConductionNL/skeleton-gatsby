import * as React from "react";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "../styling/index.css";
import { isLoggedIn } from "../services/auth";
import { PrivateApiProvider } from "../context/privateApi";
import APIService from "../apiService/apiService";
import Footer from "./../components/footer/Footer";
import { HeaderTemplate } from "../templates/header/HeaderTemplate";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [privateApi, setPrivateApi] = React.useState<APIService | null>(null);
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });
  }, [pageContext, location]);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      setPrivateApi(null);
      return;
    }

    const jwt = sessionStorage.getItem("jwt");
    !privateApi && jwt && setPrivateApi(new APIService(jwt));
  }, [privateApi, isLoggedIn()]);

  return (
    <GatsbyProvider value={gatsbyContext}>
      <Document>
        <Page className="Page">
          <HeaderTemplate />
          <PageContent className="PageContent">
            <PrivateApiProvider value={privateApi}>
              <title>Skeleton Application</title>
              {children}
            </PrivateApiProvider>
          </PageContent>
          <Footer />
        </Page>
      </Document>
    </GatsbyProvider>
  );
};

export default Layout;
