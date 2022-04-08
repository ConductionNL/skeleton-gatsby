import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { TopNav } from "../components/topNav/TopNav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <title>Skeleton Application</title>
      <Document>
        <TopNav />
        <Page>
          <PageContent>{children}</PageContent>
        </Page>
      </Document>
    </>
  );
};

export default Layout;
