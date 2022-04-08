import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { InputText, Textarea } from "../components/formFields";

interface IMelding {
  title: string;
  description: string;
}

interface MeldingenFormProps {
  melding?: IMelding;
}

export const MeldingenForm: React.FC<MeldingenFormProps> = ({ melding }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  React.useEffect(() => {
    melding && handleSetFormValues(melding);
  }, [melding]);

  const handleSetFormValues = (formValues: IMelding): void => {
    setValue("title", formValues.title);
    setValue("description", formValues.description);
  };

  const onSubmit = (data: any) => {
    /**
     * Proof of Concept and demo completed
     *
     * TODO: process data
     */
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText name="title" label="Titel" {...{ errors, register }} validation={{ required: true }} />

      <Textarea name="description" label="Omschrijving" {...{ errors, register }} validation={{ required: true }} />

      <Button type="submit">Verzenden</Button>
    </form>
  );
};
