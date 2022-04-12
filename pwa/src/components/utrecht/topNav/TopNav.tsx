import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import Logo from "./../../../assets/logo.svg";
import "./TopNav.css";
import { isLoggedIn } from "../../../services/auth";
import { logout } from "../../../services/auth";

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

  const LocationLogin: string = window.location.pathname === "/login" ? "True" : "False";

  React.useEffect(() => {
    setMappedItems(items.map((item) => ({ current: window.location.pathname === item.href, ...item })));
  }, [items]);

  return (
    <div className="utrecht-navhtml">
      <Logo />
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          {mappedItems.map((item, idx) => (
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
          {isLoggedIn() ? (
            <li className="utrecht-topnav__item">
              <Link className="utrecht-topnav__link" to={"/"} onClick={logout}>
                Uitloggen
              </Link>
            </li>
          ) : (
            <li className="utrecht-topnav__item">
              <Link
                className={clsx(
                  "utrecht-topnav__link",
                  LocationLogin === "True" && "utrecht-topnav__link--focus utrecht-topnav__link--current",
                )}
                to={"/login"}
              >
                {console.log(LocationLogin)}
                Inloggen
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
