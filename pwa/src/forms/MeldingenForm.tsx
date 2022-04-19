import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { InputText, Textarea } from "../components/formFields";
import { useQueryClient } from "react-query";
import { useNotification } from "../hooks/notifications";
import { useTranslation } from "react-i18next";

interface IMelding {
  title: string;
  description: string;
}

interface MeldingenFormProps {
  notificationId: string;
  melding?: IMelding;
}

export const MeldingenForm: React.FC<MeldingenFormProps> = ( { notificationId, melding }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const _useNotification = useNotification(queryClient);
  const getNotification = _useNotification.getOne(notificationId);
  const createOrUpdateNotification = _useNotification.createOrEdit();
  console.log(notificationId);
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
    createOrUpdateNotification.mutate({ payload: data, id: notificationId });
  };

  return (
    getNotification.isSuccess && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText name="title" label={t("Title")} {...{ errors, register }} validation={{ required: true }} />

        <Textarea
          name="description"
          label={t("Description")}
          {...{ errors, register }}
          validation={{ required: true }}
        />

        <Button type="submit">{t("Send")}</Button>
      </form>
    )
  );
};
