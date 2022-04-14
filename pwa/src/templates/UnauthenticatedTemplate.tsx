import * as React from "react";
import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { useTranslation } from "react-i18next";


export const UnauthenticatedTemplate: React.FC = () => {
  const {t} = useTranslation()
  return (
    <>
      <Heading1>{t("WelcomeMessage")}</Heading1>
    </>
  );
};
