import React from "react";
import {
    PageFooter,
    UnorderedList,
    UnorderedListItem,
    Heading4
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "./footer.css";

const Footer: React.FC = () => {
    return (
        <PageFooter className="footer">
            <UnorderedList className="footer-list">
                <Heading4 className="footer-heading">Diensten</Heading4>
                <UnorderedListItem>Verhuizen</UnorderedListItem>
                <UnorderedListItem>Huwelijk</UnorderedListItem>
                <UnorderedListItem>Uittreksel</UnorderedListItem>
            </UnorderedList>

            <UnorderedList className="footer-list">
                <Heading4 className="footer-heading">Contact</Heading4>
                <UnorderedListItem>Stadswinkel, Marienburg 30</UnorderedListItem>
                <UnorderedListItem className="footer-icon"><utrecht-icon-whatsapp/>0612345678</UnorderedListItem>
                <UnorderedListItem>gemeente@utrecht.nl</UnorderedListItem>
            </UnorderedList>

            <UnorderedList className="footer-list">
                <Heading4 className="footer-heading">Openingstijden</Heading4>
                <UnorderedListItem>Maandag - woensdag: 9.00 - 17.00</UnorderedListItem>
                <UnorderedListItem>Donderdag: 9.00 - 20.00</UnorderedListItem>
                <UnorderedListItem>Vrijdag: 9.00 - 17.00</UnorderedListItem>
            </UnorderedList>
        </PageFooter>
    );
};

export default Footer;
