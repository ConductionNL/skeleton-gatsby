/**
 * This is a TEMPORARY wrapper over the Utrecht TopNav component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-navigatie-topnav--top-nav
 */

import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import Logo from "./../../../assets/burenLogo.svg";
import "./TopNav.css";
import { ThemeSwitcher } from "../../theme-switcher/theme-switcher";
import { SelectLanguage } from "../selectLanguage/SelectLanguage";
import i18next, { changeLanguage, TFunction } from "i18next";

interface ITopNavItem {
  href: string;
  title: string | JSX.Element;
  current?: boolean;
}

interface TopNavProps {
  items: ITopNavItem[];
}

export const TopNav: React.FC<TopNavProps> = ({ items }) => {
  return (
    <div className="utrecht-navhtml">
      <nav className="topnav">
        <Logo className="topnav-logo" />
        <ul className="utrecht-topnav__list">
          {items.map((item, idx) => (
            <li key={idx} className="utrecht-topnav__item">
              <Link
                className={clsx(
                  "utrecht-topnav__link",
                  item.current && "utrecht-topnav__link--focus utrecht-topnav__link--current",
                )}
                to={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ maxWidth: "250px", display: "flex", flex: "row"  }}>
          <SelectLanguage
            languages={[
              {
                label: "NL",
                key: "nl",
                title: "Deze pagina in Nederlands",
                onClick: () => changeLanguage("nl"),
                current: i18next.language === "nl",
              },
              {
                label: "EN",
                key: "en",
                title: "This page is in English",
                onClick: () => changeLanguage("en"),
                current: i18next.language === "en",
              },
            ]}
          />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};
