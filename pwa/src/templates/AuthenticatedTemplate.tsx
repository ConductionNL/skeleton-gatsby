import * as React from "react";
import { Button, Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { logout } from "../services/auth";
import { PrivateRoute } from "../components/privateRoute/PrivateRoute";

export const AuthenticatedTemplate: React.FC = () => {
  return (
    <PrivateRoute>
      <Heading1>Welcome, you're logged in</Heading1>

      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </PrivateRoute>
  );
};
