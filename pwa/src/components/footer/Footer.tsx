import React from "react";
import {
    PageFooter,
    UnorderedList,
    UnorderedListItem,
    Heading4
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "./Footer.css";

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
                <UnorderedListItem>Stadswinkel, Marienburg 30</UnorderedListItem>
                <UnorderedListItem><utrecht-icon-whatsapp/>0612345678</UnorderedListItem>
                <UnorderedListItem>gemeente@utrecht.nl</UnorderedListItem>
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
