import * as React from "react";
import { isLoggedIn } from "../services/auth";
import { AuthenticatedTemplate } from "../templates/AuthenticatedTemplate/AuthenticatedTemplate";
import { UnauthenticatedTemplate } from "../templates/UnauthenticatedTemplate";

const IndexPage: React.FC = () => {
  return isLoggedIn() ? <AuthenticatedTemplate /> : <UnauthenticatedTemplate />;
};

export default IndexPage;
