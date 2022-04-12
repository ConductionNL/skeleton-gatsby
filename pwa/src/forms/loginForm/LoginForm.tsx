import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { handleLogin } from "./../../services/auth";
import { InputText, InputPassword } from "../../components/formFields";
import { FormFieldError } from "../../components/formFields/formFieldError/FormFieldError";
import "./LoginForm.css";

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
    await handleLogin(data)
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
        label="Gebruikersnaam"
        {...{ errors, register }}
        validation={{ required: true }}
        disabled={loading}
      />
      <InputPassword
        name="password"
        label="Wachtwoord"
        {...{ errors, register }}
        validation={{ required: true }}
        disabled={loading}
      />

      {error && <FormFieldError error={error} />}

      <Button type="submit" disabled={loading}>
        Verzenden
      </Button>
    </form>
  );
};
