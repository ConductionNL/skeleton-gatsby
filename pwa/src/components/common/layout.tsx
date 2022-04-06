import * as React from "react";
import { Helmet } from "react-helmet";
import { Page, PageContent } from "../utrecht-components";

import "@utrecht/design-tokens/dist/theme/index.css";
import "@utrecht/component-library-css/dist/bem.css";

/**
 * This components renders a layout for code that applies to all pages.
 *
 * @param {object} children Content that is rendered as body.
 * @returns JSX of the generated Layout.
 */
export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        {/* <link href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" rel="stylesheet" /> */}
        {/* <link href="https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css" rel="stylesheet" /> */}
      </Helmet>
      <title>Skeleton Gatsby App</title>
      <Page className="utrecht-theme">
        <PageContent>{children}</PageContent>
      </Page>
    </>
  );
}
