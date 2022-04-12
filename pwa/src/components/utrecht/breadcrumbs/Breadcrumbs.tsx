/**
 * This is a TEMPORARY wrapper over the Utrecht Breadcrumb component.
 *
 * Do NOT update this file, because all changes WILL BE LOST upon the package integration.
 *
 * Source: https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-component-breadcrumb-navigation--breadcrumb-navigation
 */

import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { upperFirst } from "lodash";

interface Breadcrumb {
  pathname: string;
  crumbLabel: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => (
  <nav className="utrecht-breadcrumb utrecht-breadcrumb--arrows">
    <ol className="utrecht-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
      {crumbs.map((crumb, idx) => {
        const lastCrumb: boolean = crumbs.length - 1 === idx;

        return (
          <li
            key={idx}
            className="utrecht-breadcrumb__item"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <Link
              className={clsx(
                "utrecht-breadcrumb__link utrecht-link",
                lastCrumb && "utrecht-breadcrumb__link--focus utrecht-link--focus",
              )}
              itemProp="item"
              to={crumb.pathname}
            >
              <span className="utrecht-breadcrumb__text" itemProp="name">
                {upperFirst(crumb.crumbLabel)}
              </span>
              <meta itemProp="position" content={idx.toString()} />
            </Link>
          </li>
        );
      })}
    </ol>
  </nav>
);
