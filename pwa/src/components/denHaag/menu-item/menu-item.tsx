import * as React from "react";
import { FC, useContext } from "react";
import { LocaleContext } from "@gemeente-denhaag/nl-portal-localization";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { BadgeCounter } from "@gemeente-denhaag/components-react";
import { PortalPage } from "../../../interfaces/portal-page";
import "./menu-item.css";
import { LayoutContext } from "../../../context/layout-context";

interface MenuItemProps {
  item: PortalPage;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { hrefLang } = useContext(LocaleContext);
  const { hideMenu, messagesCount } = useContext(LayoutContext);
  const location = useLocation();
  const getBasePath = (url: string) => {
    const splitUrl = url.split("/");
    if (splitUrl.length > 0) {
      return splitUrl[1];
    }
    return url;
  };

  return (
    <Link
      to={item.path}
      onClick={hideMenu}
      hrefLang={hrefLang}
      className={classNames("denhaag-menu-button", "denhaag-menu-button--flex", {
        "denhaag-menu-button--active": getBasePath(location.pathname) === getBasePath(item.path),
      })}
    >
      {item.icon && <div className={"denhaag-menu-button__icon"}>{item.icon}</div>}
      <FormattedMessage id={`pageTitles.${item.titleTranslationKey}`} />
      {item.showMessagesCount && messagesCount > 0 && (
        <div className={"denhaag-menu-button__counter"}>
          <BadgeCounter>{messagesCount}</BadgeCounter>
        </div>
      )}
    </Link>
  );
};

export { MenuItem };
