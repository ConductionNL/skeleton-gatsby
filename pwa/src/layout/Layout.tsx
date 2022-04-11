import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Breadcrumbs } from "../components/utrecht/breadcrumbs/Breadcrumbs";
import Footer from "./../components/footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>

      <Document>
        <Page className="Page">
          <PageContent className="PageContent">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "https://google.nl", active: true },
                { label: "Foo", href: "/" },
                { label: "Bar", href: "/" },
              ]}
            />
            {children}
          </PageContent>
          <Footer />
        </Page>
      </Document>
    </>
  );
};

export default Layout;
