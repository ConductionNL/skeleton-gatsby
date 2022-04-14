import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { LoginForm } from "../../forms/loginForm/LoginForm";
import "./LoginTemplate.css";
import { t } from "i18next";

export const LoginTemplate: React.FC = () => {
  return (
    <div className="LoginTemplate">
      <div className="LoginTemplate-inner">
        <Heading1>{t("Login")}</Heading1>
        <LoginForm />
      </div>
    </div>
  );
};
