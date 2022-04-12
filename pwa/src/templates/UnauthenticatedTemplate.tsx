import * as React from "react";
import { Button, Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Link } from "gatsby";

export const UnauthenticatedTemplate: React.FC = () => {
  return (
    <>
      <Heading1>Welcome to the Skeleton Application</Heading1>

      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </>
  );
};
