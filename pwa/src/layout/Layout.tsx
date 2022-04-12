import * as React from "react";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "../styling/index.css";
import { isLoggedIn } from "../services/auth";
import { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";

import { Breadcrumbs } from "../components/utrecht/breadcrumbs/Breadcrumbs";
import { TopNav } from "../components/utrecht/topNav/TopNav";
import Footer from "./../components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any;
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const [API, setAPI] = React.useState<APIService | null>(null);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      setAPI(null);
      return;
    }

    const jwt = sessionStorage.getItem("jwt");
    !API && jwt && setAPI(new APIService(jwt));
  }, [API, isLoggedIn()]);

  return (
    <Document>
      <Page className="Page">
        <TopNav
          items={[
            { href: "/", title: "Home" },
            { href: "/meldingen/", title: "Meldingen" },
          ]}
        />
        <PageContent className="PageContent">
          <APIProvider value={API}>
            <title>Skeleton Application</title>
            <Breadcrumbs {...{ crumbs }} />
            {children}
          </APIProvider>
        </PageContent>
        <Footer />
      </Page>
    </Document>
  );
};

export default Layout;
