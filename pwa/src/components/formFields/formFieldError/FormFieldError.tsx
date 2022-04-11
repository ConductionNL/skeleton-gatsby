import * as React from "react";
import "./FormFieldError.css";
import { FieldErrors } from "react-hook-form";

interface IFormFieldErrorProps {
  error: string;
}

export const FormFieldError: React.FC<IFormFieldErrorProps> = ({ error }) => {
  return <span className="FormFieldError">{error}</span>;
};
