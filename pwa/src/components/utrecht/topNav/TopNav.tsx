/**
 * This is a TEMPORARY wrapper over the Utrecht Breadcrumb component.
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";

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
        <a className="topnav-searchbar">
          {t("Search")} <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
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
      </nav>
    </div>
  );
};
