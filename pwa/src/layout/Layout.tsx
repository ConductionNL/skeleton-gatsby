import * as React from "react";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { isLoggedIn } from "../services/auth";
import { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import Login from "../pages/login";
import "../styling/index.css";

const Layout: React.FC = ({ children }) => {
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
      <Page>
        <PageContent>
          {API ? (
            <APIProvider value={API}>
              <title>Skeleton Application</title>
              {children}
            </APIProvider>
          ) : (
            <Login />
          )}
        </PageContent>
      </Page>
    </Document>
  );
};

export default Layout;
