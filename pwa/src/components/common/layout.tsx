import * as React from "react";
import { Helmet } from "react-helmet";

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
        <link href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css" rel="stylesheet" />
      </Helmet>
      <div>
        <title>Skeleton Gatsby App</title>
        <div>{children}</div>
      </div>
    </>
  );
}
