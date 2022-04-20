import * as React from "react";
import { Textbox } from "@utrecht/component-library-react/dist";
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
  disabled,
  register,
}) => (
  <FormFieldGroup {...{ name, label, errors }}>
    <Textbox id={name} {...register(name, { ...validation })} invalid={errors[name]} {...{ disabled, type }} />
  </FormFieldGroup>
);

export const InputText: React.FC<IFormFieldProps & IReactHookFormProps> = ({ ...rest }) => (
  <Input type="text" {...rest} />
);

export const InputPassword: React.FC<IFormFieldProps & IReactHookFormProps> = ({ ...rest }) => (
  <Input type="password" {...rest} />
);
