import * as React from "react";
import "./FormFieldGroup.css";
import { FieldErrors } from "react-hook-form";
import { IFormFieldProps } from "../types";
import { FormLabel } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

interface IFormFieldGroupProps {
  errors: FieldErrors;
}

export const FormFieldGroup: React.FC<IFormFieldGroupProps & IFormFieldProps> = (props) => {
  const hasError: boolean = props.errors[props.name];

  return (
    <div className={`FormField-group ${hasError && "FormField-group--error"}`}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>

      {props.children}

      <span className="FormField-group-errorMessage">{hasError && getErrorMessage(props.errors[props.name])}</span>
    </div>
  );
};

const getErrorMessage = (errors: FieldErrors): string => {
  if (errors.message) return errors.message;

  switch (errors.type) {
    case "required":
      return "Dit veld is verplicht";
    case "maxLength":
      return "Dit veld bevat teveel karakters";
    case "minLength":
      return "Dit veld bevat te weinig karakters";
    case "max":
      return "Dit getal is te groot";
    case "min":
      return "Dit getal is te klein";
    case "pattern":
      return "Deze structuur is niet correct";
    default:
      return "";
  }
};
