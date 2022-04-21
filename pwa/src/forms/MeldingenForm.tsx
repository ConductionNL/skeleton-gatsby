import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@utrecht/component-library-react/dist";
import { InputText, Textarea } from "../components/formFields";
import { useQueryClient } from "react-query";
import { useNotification } from "../hooks/notifications";
import { useTranslation } from "react-i18next";

interface MeldingenFormProps {
  notificationId: string;
}

export const MeldingenForm: React.FC<MeldingenFormProps> = ({ notificationId }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const _useNotification = useNotification(queryClient);
  const getNotification = _useNotification.getOne(notificationId);
  const createOrUpdateNotification = _useNotification.createOrEdit();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm();

  React.useEffect(() => {
    if (getNotification.isSuccess) {
      const notification = getNotification.data;

      handleSetFormValues(notification);
    }
  }, [getNotification.isSuccess]);

  const handleSetFormValues = (source: any): void => {
    const basicFields: string[] = ["title", "description"];
    basicFields.forEach((field) => setValue(field, source[field]));
  };

  const onSubmit = (data: any) => {
    createOrUpdateNotification.mutate({ payload: data, id: notificationId });
  };

  return getNotification.isSuccess ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText name="title" label={t("Title")} {...{ errors, register }} validation={{ required: true }} />

      <Textarea name="description" label={t("Description")} {...{ errors, register }} validation={{ required: true }} />

      <Button type="submit">{t("Send")}</Button>
    </form>
  ) : (
    <></>
  );
};
