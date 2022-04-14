import React from "react";
import {
  Heading4,
  PageFooter,
  UnorderedList,
  UnorderedListItem,
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBuilding, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageFooter className="Footer">
      <UnorderedList className="UnorderedList">
        <Heading4>{t("Services")}</Heading4>
        <UnorderedListItem>{t("Moving")}</UnorderedListItem>
        <UnorderedListItem>{t("Marriage")}</UnorderedListItem>
        <UnorderedListItem>{t("Abridgment")}</UnorderedListItem>
      </UnorderedList>

      <UnorderedList className="UnorderedList">
        <Heading4>{t("Contact")}</Heading4>
        <UnorderedListItem>
          <FontAwesomeIcon icon={faBuilding} />
          Stadswinkel, Marienburg 30
        </UnorderedListItem>
        <UnorderedListItem>
          <FontAwesomeIcon icon={faPhone} />
          0612345678
        </UnorderedListItem>
        <UnorderedListItem>
          <FontAwesomeIcon icon={faEnvelope} />
          gemeente@utrecht.nl
        </UnorderedListItem>
      </UnorderedList>

      <UnorderedList className="UnorderedList">
        <Heading4>{t("Opening hours")}</Heading4>
        <UnorderedListItem>
          {t("Monday")} - {t("Wednesday")}: 9.00 - 17.00
        </UnorderedListItem>
        <UnorderedListItem>{t("Thursday")}: 9.00 - 20.00</UnorderedListItem>
        <UnorderedListItem>{t("Friday")}: 9.00 - 17.00</UnorderedListItem>
      </UnorderedList>
    </PageFooter>
  );
};

export default Footer;
