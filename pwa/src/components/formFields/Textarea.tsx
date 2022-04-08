import * as React from "react";

import { Textarea as _Textarea } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { FormFieldGroup } from "./formFieldGroup/FormFieldGroup";
import { IFormFieldProps, IReactHookFormProps } from "./types";

export const Textarea: React.FC<IFormFieldProps & IReactHookFormProps> = ({
  name,
  label,
  errors,
  validation,
  register,
}) => (
  <FormFieldGroup {...{ name, label, errors }}>
    <_Textarea id={name} {...register(name, { ...validation })} invalid={errors[name]} />
  </FormFieldGroup>
);
