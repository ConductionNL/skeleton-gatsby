import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Breadcrumbs } from "../components/utrecht/breadcrumbs/Breadcrumbs";
import Footer from "./../components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any;
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <title>Skeleton Application</title>

      <Document>
        <Page className="Page">
          <PageContent className="PageContent">
            <Breadcrumbs {...{ crumbs }} />
            {children}
          </PageContent>
          <Footer />
        </Page>
      </Document>
    </>
  );
};

export default Layout;
