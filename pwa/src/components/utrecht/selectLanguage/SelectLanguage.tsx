/**
 * This is a TEMPORARY wrapper over the Utrecht Breadcrumb component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-breadcrumb-navigation--breadcrumb-navigation
 */

import { changeLanguage } from "i18next";
import * as React from "react";

interface Language {
  name?: string;
}

interface LanguageProps {
  language?: Language[];
}

export const SelectLanguage: React.FC<LanguageProps> = ({ language }) => (
  <>
    <div className="utrecht-alternate-lang-nav">
      <a onClick={() => changeLanguage("en")}>EN</a>
      <span aria-hidden="true"> | </span>
      <a onClick={() => changeLanguage("nl")}>NL</a>
    </div>
  </>
);
