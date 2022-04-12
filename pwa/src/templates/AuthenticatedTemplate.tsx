import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { PrivateRoute } from "../components/privateRoute/PrivateRoute";

export const AuthenticatedTemplate: React.FC = () => {
  return (
    <PrivateRoute>
      <Heading1>Welcome, you're logged in</Heading1>
    </PrivateRoute>
  );
};
