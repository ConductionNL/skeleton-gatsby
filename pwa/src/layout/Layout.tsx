import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>

      <Document>
        <Page>
          <PageContent>{children}</PageContent>
        </Page>
      </Document>
    </>
  );
};

export default Layout;
