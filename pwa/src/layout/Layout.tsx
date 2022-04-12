import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { TopNav } from "../components/utrecht/topNav/TopNav";
import Footer from "./../components/footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>
      <Document>
        <Page className="Page">
          <TopNav
            items={[
              { href: "/", title: "Home" },
              { href: "/meldingen/", title: "Meldingen" },
            ]}
          />
          <PageContent className="PageContent">{children}</PageContent>
          <Footer />
        </Page>
      </Document>
    </>
  );
};

export default Layout;
