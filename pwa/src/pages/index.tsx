import * as React from "react";
import { isLoggedIn, logout } from "../services/auth";

// Disabled till fixed
// import { Article, Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

// To make Utrechts components working for now, copy a component to our /pwa/src/components/utrecht-components
// directory and uncomment the export in utrecht-components/index.ts
import { Heading1 } from "../components/utrecht-components";

const IndexPage = () => {
  return (
    <>
      <Heading1>Welcome to the skeleton</Heading1>

      <p>U are logged in</p>

      <button onClick={logout}>Logout</button>
    </>
  );
};

export default IndexPage;
