import * as React from "react";
import { Heading4, IconButton } from "@gemeente-denhaag/components-react";
import { CloseIcon } from "@gemeente-denhaag/icons";
import { FormattedMessage, useIntl } from "react-intl";
import { FC, useContext } from "react";
import "./menu";
import { LayoutContext } from "../../../context/layout-context";
import { PortalPage } from "../../../interfaces/portal-page";
import { MenuItem } from "../menu-item/menu-item";

interface MenuProps {
  items: Array<PortalPage>;
}

const Menu: FC<MenuProps> = ({ items }) => {
  const { menuOpened, hideMenu } = useContext(LayoutContext);
  const intl = useIntl();

  return (
    <div className={"menu menu--hidden"}>
      <div className={"menu__inner"}>
        <header className={"menu__header"}>
          <Heading4>
            <FormattedMessage id="app.appName" />
          </Heading4>
          {React.cloneElement(
            <IconButton onClick={hideMenu}>
              <CloseIcon />
            </IconButton>,
            { title: intl.formatMessage({ id: "menu.close" }) },
          )}
        </header>
        <nav className={"menu__items"}>
          {items
            .filter((item) => item.showInMenu)
            .map((item) => (
              <MenuItem key={item.path} item={item} />
            ))}
        </nav>
      </div>
    </div>
  );
};

export { Menu };
