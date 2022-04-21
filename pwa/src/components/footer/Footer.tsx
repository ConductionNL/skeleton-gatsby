import React from "react";
import { Heading4, PageFooter, UnorderedList, UnorderedListItem } from "@utrecht/component-library-react/dist";
import { useTranslation } from "react-i18next";
import {CallIcon, EmailIcon, HouseIcon,} from "@gemeente-denhaag/icons";
import "../footer/Footer.css"

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageFooter className="Footer">
      <UnorderedList className="UnorderedList-Diensten">
        <Heading4>{t("Services")}</Heading4>
        <UnorderedListItem>{t("Moving")}</UnorderedListItem>
        <UnorderedListItem>{t("Marriage")}</UnorderedListItem>
        <UnorderedListItem>{t("Abridgment")}</UnorderedListItem>
      </UnorderedList>

      <UnorderedList className="UnorderedList-Contact">
        <Heading4>{t("Contact")}</Heading4>
        <UnorderedListItem>
          <HouseIcon />
          Stadswinkel, Marienburg 30
        </UnorderedListItem>
        <UnorderedListItem>
          <CallIcon />
          0612345678
        </UnorderedListItem>
        <UnorderedListItem>
          <EmailIcon />
          gemeente@utrecht.nl
        </UnorderedListItem>
      </UnorderedList>

      <UnorderedList className="UnorderedList-Openingstijden">
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
