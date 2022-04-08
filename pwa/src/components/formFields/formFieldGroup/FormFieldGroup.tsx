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
      return "This field is required";
    case "maxLength":
      return "Field contains too many characters";
    case "minLength":
      return "This field does not contain enough characters";
    case "max":
      return "This input is too small";
    case "min":
      return "This input is too large";
    case "pattern":
      return "This pattern is incorrect";
    default:
      return "";
  }
};
