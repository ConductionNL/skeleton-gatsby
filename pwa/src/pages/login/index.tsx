import * as React from "react";
import { isLoggedIn } from "../../services/auth";
import { navigate } from "gatsby-link";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { LoginForm } from "../../forms/LoginForm";

const Login: React.FC = () => {
  React.useEffect(() => {
    if (isLoggedIn() && window.location.pathname.includes("login")) {
      navigate("/");
    }
  }, [isLoggedIn()]);

  return (
    <>
      <Heading1>Welcome to the Skeleton Application</Heading1>

      <LoginForm />
    </>
  );
};

export default Login;
