import * as React from "react";
import { isLoggedIn, logout } from "../services/auth";
import { Heading1, Article, Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const IndexPage: React.FC = () => {
  return (
    <>
      <Heading1>Skeleton Application</Heading1>
      <br />
      {isLoggedIn() && <Article>You are logged in</Article>}
      <br />
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default IndexPage;
