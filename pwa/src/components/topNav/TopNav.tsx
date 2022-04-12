import * as React from "react";
import {
  PageHeader,
  UnorderedList,
  UnorderedListItem,
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import { Container } from "../container/Container";
import "./TopNav.css";
import Logo from "./../../assets/logo.svg";
import { faArrowRightFromBracket, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNav: React.FC = () => {
  return (
    <div className="TopNav">
      <Container>
        <div className="TopNav-inner">
          <Logo />
          <UnorderedList className="TopNav-userNav">
            <UnorderedListItem>
              <FontAwesomeIcon icon={faCircleUser} />
              John Doe
            </UnorderedListItem>
            <UnorderedListItem>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Uitloggen
            </UnorderedListItem>
          </UnorderedList>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
