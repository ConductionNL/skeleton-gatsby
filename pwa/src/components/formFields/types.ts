import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IFormFieldProps {
  label: string;
  name: string;
}

export interface IReactHookFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}
