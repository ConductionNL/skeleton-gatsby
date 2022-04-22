import * as React from "react";
import "./FormFieldGroup.css";
import { FieldErrors } from "react-hook-form";
import { IFormFieldProps } from "../types";
import { FormGroup } from "@gemeente-denhaag/formgroup";
import { FormLabel } from "@utrecht/component-library-react/dist";
import { FormFieldError } from "../formFieldError/FormFieldError";

interface IFormFieldGroupProps {
  errors: FieldErrors;
}

export const FormFieldGroup: React.FC<IFormFieldGroupProps & IFormFieldProps> = (props) => {
  const hasError: boolean = props.errors[props.name];

  return (
    <FormGroup className={`${hasError && "FormField-group--error"}`}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>

      {props.children}

      {hasError && <FormFieldError error={getErrorMessage(props.errors[props.name])} />}
    </FormGroup>
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
