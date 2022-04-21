import * as React from "react";
import { Heading1 } from "@utrecht/component-library-react/dist";
import { useTranslation } from "react-i18next";
import { ISideNavItem } from "../components/utrecht/sideNav/SideNav";

export const UnauthenticatedTemplate: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Heading1>{"Welkom op Mijn Diensten van Gemeente Buren"}</Heading1>

    </>
  );
};
