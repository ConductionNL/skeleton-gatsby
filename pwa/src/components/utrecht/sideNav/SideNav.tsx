/**
 * This is a TEMPORARY wrapper over the Utrecht Breadcrumb component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-navigatie-sidenav--side-nav
 */

import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { Menu } from "../../denHaag/menu/menu";

export interface ISideNavItem {
  href: string;
  title: string;
  current?: boolean;
  PortalPage?: {
    path: string;
  }[];
  children?: {
    href: string;
    title: string;
    current?: boolean;
  }[];
}

// path: string;
// titleTranslationKey: string;
// pageComponent: ReactElement;
// isHome?: boolean;
// showInMenu?: boolean;
// showMessagesCount?: boolean;
// icon?: ReactElement;
// children?: Array<PortalPage>;
// showLinkToParent?: boolean;

interface SideNavProps {
  items: ISideNavItem[];
  className?: string;
}

export const SideNav: React.FC<SideNavProps> = ({ items, className }) => {
  return (
    <nav className={clsx("utrecht-sidenav", className && className)}>
      <Menu items={[]}>
        <ul className="utrecht-sidenav__list">
          {items.map((item, idx) => (
            <li key={idx} className="utrecht-sidenav__item utrecht-sidenav__item--last utrecht-sidenav__item--parent">
              <Link
                className="utrecht-sidenav__link utrecht-sidenav__link--current utrecht-sidenav__link--parent"
                to={item.href}
              >
                <div
                  className={clsx("utrecht-sidenav__marker", item.current && "utrecht-sidenav__marker--current")}
                ></div>
                <div className="utrecht-sidenav__connection utrecht-sidenav__connection--parent utrecht-sidenav__connection--last"></div>
                {item.title}
              </Link>

              {item.children && (
                <ul className="utrecht-sidenav__list utrecht-sidenav__list--child">
                  {item.children.map((child, idx) => (
                    <li key={idx} className="utrecht-sidenav__item utrecht-sidenav__item--child">
                      <Link className="utrecht-sidenav__link utrecht-sidenav__link--child" to={child.href}>
                        <div
                          className={clsx(
                            "utrecht-sidenav__marker utrecht-sidenav__marker--child",
                            child.current && "utrecht-sidenav__marker--current",
                          )}
                        ></div>{" "}
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div className="utrecht-sidenav__item-separator"></div>
            </li>
          ))}
        </ul>
      </Menu>
    </nav>
  );
};
