import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import TopNav from "../components/topNav/TopNav";
import Footer from "./../components/footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>
      <Document>
        <TopNav />
        <Page className="Page">
          <PageContent className="PageContent">{children}</PageContent>
          <Footer />
        </Page>
      </Document>
    </>
  );
};

export default Layout;
