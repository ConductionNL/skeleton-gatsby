import * as React from "react";
import {
  Document,
  Heading1,
  Page,
  PageContent,
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { LoginForm } from "../../forms/loginForm/LoginForm";
import "./LoginTemplate.css";

export const LoginTemplate: React.FC = () => {
  return (
    <div className="LoginTemplate">
      <div className="LoginTemplate-inner">
        <Heading1>Login</Heading1>
        <LoginForm />
      </div>
    </div>
  );
};
