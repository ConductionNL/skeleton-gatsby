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
import {Menu as _Menu} from "@gemeente-denhaag/menu"

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
    <_Menu>
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
    </_Menu>
  );
};
