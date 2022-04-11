import * as React from "react";

interface Breadcrumb {
  href: string;
  label: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav className="utrecht-breadcrumb utrecht-breadcrumb--arrows">
      <ol className="utrecht-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
        {crumbs.map((crumb, idx) => (
          <li
            className="utrecht-breadcrumb__item"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <a
              className={`utrecht-breadcrumb__link utrecht-link ${
                crumb.active && "utrecht-breadcrumb__link--focus utrecht-link--focus"
              }`}
              itemProp="item"
              href={crumb.href}
            >
              <span className="utrecht-breadcrumb__text" itemProp="name">
                {crumb.label}
              </span>
              <meta itemProp="position" content={idx.toString()} />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
