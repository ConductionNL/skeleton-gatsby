import * as React from "react";
import { Heading1 } from "@utrecht/component-library-react/dist";
import { LoginForm } from "../../forms/loginForm/LoginForm";
import "./LoginTemplate.css";
import { useTranslation } from "react-i18next";

export const LoginTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="LoginTemplate">
      <div className="LoginTemplate-inner">
        <Heading1>{t("Login")}</Heading1>
        <LoginForm />
      </div>
    </div>
  );
};
