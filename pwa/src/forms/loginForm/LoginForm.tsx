import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, Separator } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { handleDigiDLogin, handleDefaultLogin } from "./../../services/auth";
import { InputText, InputPassword } from "../../components/formFields";
import { FormFieldError } from "../../components/formFields/formFieldError/FormFieldError";
import "./LoginForm.css";
import DigiDLogo from "../../resources/images/digid_logo.svg";

export const LoginForm: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError("");
    await handleDefaultLogin(data)
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginDigiD = async () => {
    setLoading(true);
    setError("");
    handleDigiDLogin();
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
      <InputText name="username" label="Gebruikersnaam" {...{ errors, register }} validation={{ required: true }} />
      <InputPassword name="password" label="Wachtwoord" {...{ errors, register }} validation={{ required: true }} />

      {error && <FormFieldError error={error} />}

      <Button type="submit" disabled={loading}>
        Verzenden
      </Button>

      <Separator />

      <Button onClick={loginDigiD} className="LoginForm-DigiD" type="button" disabled={loading}>
        <img src={DigiDLogo} width="36px" height="36px" />
        <span>DigiD</span>
      </Button>
    </form>
  );
};
