import * as React from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";
import { Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { handleLogin } from "./../../services/auth";
import { InputText, InputPassword } from "../../components/formFields";
import { FormFieldError } from "../../components/formFields/formFieldError/FormFieldError";
import { useTranslation } from "react-i18next";
import APIContext from "../../apiService/apiContext";

export const LoginForm: React.FC = () => {
  const API = React.useContext(APIContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");
    await handleLogin(data, API)
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="username"
        label={t("Username")}
        {...{ errors, register }}
        validation={{ required: true }}
        disabled={loading}
      />
      <InputPassword
        name="password"
        label={t("Password")}
        {...{ errors, register }}
        validation={{ required: true }}
        disabled={loading}
      />

      {error && <FormFieldError error={error} />}

      <Button type="submit" disabled={loading}>
        {t("Send")}
      </Button>
    </form>
  );
};
