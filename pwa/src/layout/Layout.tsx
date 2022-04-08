import * as React from "react";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

/**
 * This components renders a layout for code that applies to all pages.
 *
 * @param {object} children Content that is rendered as body.
 * @returns JSX of the generated Layout.
 */
const Layout: React.FC = ({ children }) => {
  const [API, setAPI] = React.useState<APIService>(null);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      setAPI(null);
      return;
    }

    const jwt = sessionStorage.getItem("jwt");
    !API && jwt && setAPI(new APIService(jwt));
  }, [API, isLoggedIn()]);

  return (
    <>
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
    </>
  );
};

export default Layout;
