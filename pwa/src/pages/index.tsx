import * as React from "react";
import { isLoggedIn, logout } from "../services/auth";
import { Heading1, Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const IndexPage: React.FC = () => {
  return (
    <>
      <Heading1>Skeleton Application</Heading1>
      {isLoggedIn() && <div>You are logged in</div>}
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default IndexPage;
