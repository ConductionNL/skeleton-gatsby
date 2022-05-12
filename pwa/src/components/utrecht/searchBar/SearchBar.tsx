/**
 * This is a TEMPORARY wrapper over the Utrecht Search Bar component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-search-bar--search-bar
 */

import * as React from "react";

interface SearchBarProps {
  buttonLabel: string;
  formLabel?: string;
  inputLabel?: string;
  value?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ buttonLabel, formLabel, inputLabel, value }) => {
  return (
    <form className="utrecht-search-bar" role="search" aria-label={formLabel}>
      <input
        type="search"
        className="utrecht-search-bar__input utrecht-textbox utrecht-textbox utrecht-textbox--html-input"
        name="q"
        autoComplete="off"
        spellCheck="false"
        value={value}
        aria-label={inputLabel}
      />
      <button type="submit" value="Zoeken" className="utrecht-search-bar__button utrecht-button">
          {buttonLabel}
      </button>
    </form>
  );
};
