import * as React from "react";
import { Textbox } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { FormFieldGroup } from "./formFieldGroup/FormFieldGroup";
import { IFormFieldProps, IReactHookFormProps } from "./types";

interface IInputProps {
  type: "text" | "url" | "password" | "number";
}

export const Input: React.FC<IInputProps & IFormFieldProps & IReactHookFormProps> = ({
  type,
  name,
  label,
  errors,
  validation,
  register,
}) => (
  <FormFieldGroup {...{ name, label, errors }}>
    <Textbox type={type} id={name} {...register(name, { ...validation })} invalid={errors[name]} />
  </FormFieldGroup>
);

export const InputText: React.FC<IFormFieldProps & IReactHookFormProps> = ({ ...rest }) => (
  <Input type="text" {...rest} />
);

export const InputPassword: React.FC<IFormFieldProps & IReactHookFormProps> = ({ ...rest }) => (
  <Input type="password" {...rest} />
);
