import * as React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby-link";
import { Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { setJwtUser } from "./../services/auth";

import APIService from "../apiService/apiService";
import { InputText, InputPassword } from "../components/formFields";

export const LoginForm: React.FC = () => {
  const API: APIService = new APIService("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);

    API.Login.login(data)
      .then((res) => {
        setJwtUser(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(`Login went wrong: ${err}`);
        throw new Error(`Login went wrong: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText name="username" label="Gebruikersnaam" {...{ errors, register }} validation={{ required: true }} />
      <InputPassword name="password" label="Wachtwoord" {...{ errors, register }} validation={{ required: true }} />

      <Button type="submit" disabled={loading}>
        Verzenden
      </Button>
    </form>
  );
};
