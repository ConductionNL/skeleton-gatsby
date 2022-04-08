import React from "react";
import {
  Heading4,
  PageFooter,
  UnorderedList,
  UnorderedListItem
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <PageFooter>
      <UnorderedList>
        <Heading4>Diensten</Heading4>
        <UnorderedListItem>Verhuizen</UnorderedListItem>
        <UnorderedListItem>Huwelijk</UnorderedListItem>
        <UnorderedListItem>Uittreksel</UnorderedListItem>
      </UnorderedList>

      <UnorderedList>
        <Heading4>Contact</Heading4>
        <UnorderedListItem><FontAwesomeIcon icon={faBuilding} />Stadswinkel, Marienburg 30</UnorderedListItem>
        <UnorderedListItem><FontAwesomeIcon icon={faPhone} />0612345678</UnorderedListItem>
        <UnorderedListItem><FontAwesomeIcon icon={faEnvelope} />gemeente@utrecht.nl</UnorderedListItem>
      </UnorderedList>

      <UnorderedList>
        <Heading4>Openingstijden</Heading4>
        <UnorderedListItem>Maandag - woensdag: 9.00 - 17.00</UnorderedListItem>
        <UnorderedListItem>Donderdag: 9.00 - 20.00</UnorderedListItem>
        <UnorderedListItem>Vrijdag: 9.00 - 17.00</UnorderedListItem>
      </UnorderedList>
    </PageFooter>
  );
};

export default Footer;
