import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";

interface TopNavItem {
  href: string;
  title: string;
  current?: boolean;
}

interface TopNavProps {
  items: TopNavItem[];
}

export const TopNav: React.FC<TopNavProps> = ({ items }) => {
  const [mappedItems, setMappedItems] = React.useState<TopNavItem[]>(items);

  React.useEffect(() => {
    setMappedItems(items.map((item) => ({ current: window.location.pathname === item.href, ...item })));
  }, [items]);

  return (
    <div className="utrecht-navhtml">
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          {mappedItems.map((item) => (
            <li className="utrecht-topnav__item">
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
