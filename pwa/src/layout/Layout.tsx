import * as React from "react";
import { Document, Page, PageContent } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { isLoggedIn } from "../services/auth";
import { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import "../styling/index.css";
import Footer from "./../components/footer/Footer";
import { Table } from "../components/table/Table";

const Meldingen = [
  {
    id: "2309842093842",
    title: "lkajdsflasdkjf",
    date: "203843209842",
    description: "aslaksdfj askdlfj",
  },
  {
    id: "2309842093842",
    title: "lkajdsflasdkjf",
    date: "203843209842",
    description: "aslaksdfj askdlfj",
  },
  {
    id: "2309842093842",
    title: "lkajdsflasdkjf",
    date: "203843209842",
    description: "aslaksdfj askdlfj",
  },
];

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
      <Page className="Page">
        <PageContent className="PageContent">
          <APIProvider value={API}>
            <title>Skeleton Application</title>
            {children}

            <Table
              headers={["Title", "Description"]}
              rows={Meldingen.map((melding) => [melding.title, melding.description, <a href="#">Edit</a>])}
            />
          </APIProvider>
        </PageContent>
        <Footer />
      </Page>
    </Document>
  );
};

export default Layout;
