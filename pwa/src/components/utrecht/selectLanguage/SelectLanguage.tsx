/**
 * This is a TEMPORARY wrapper over the Utrecht Breadcrumb component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-breadcrumb-navigation--breadcrumb-navigation
 */
import * as React from "react";
import clsx from "clsx";

interface ILanguage {
  label: string;
  key: string;
  title: string;
  onClick: () => void;
  current?: boolean;
}

interface LanguageProps {
  languages: ILanguage[];
}

export const SelectLanguage: React.FC<LanguageProps> = ({ languages }) => (
  <>
    <div className="utrecht-alternate-lang-nav">
      {languages.map((language, idx) => (
        <span key={idx}>
          <a
            className={clsx(
              "utrecht-link utrecht-link--alternate-lang",
              language.current && "utrecht-link--current-lang",
            )}
            onClick={language.onClick}
            aria-current="page"
            title={language.title}
            hrefLang={language.key}
            lang={language.key}
          >
            {language.label}
          </a>

          {languages.length - 1 !== idx && <span aria-hidden="true"> | </span>}
        </span>
      ))}
    </div>
  </>
);
