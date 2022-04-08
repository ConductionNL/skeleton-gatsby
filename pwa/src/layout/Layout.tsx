import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm"
import Footer from "../components/footer/footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>

      <Document>
        <Page className="page">
          <PageContent className="page-content">{children}</PageContent>
            <Footer/>
        </Page>
      </Document>
    </>
  );
};

export default Layout;
