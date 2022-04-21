import * as React from "react";
import {
  Table,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableHeader,
} from "@utrecht/component-library-react/dist";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./MeldingenTable.css";

interface MeldingenProps {
  meldingen: any[];
}

export const MeldingenTable: React.FC<MeldingenProps> = ({ meldingen }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHeader>
        <TableRow className="TableRow">
          <TableHeaderCell>{t("Title")}</TableHeaderCell>
          <TableHeaderCell>{t("Description")}</TableHeaderCell>
          <TableHeaderCell>{t("Date Created")}</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {meldingen.map((melding: any, idx) => (
          <TableRow key={idx}>
            <TableCell>{melding.title}</TableCell>
            <TableCell>{melding.description}</TableCell>
            <TableCell>{new Date(melding["@dateCreated"]).toLocaleString("nl-NL")}</TableCell>
            <Link className="utrecht-link d-flex justify-content-end" to={`/meldingen/${melding.id}`}>
              <button className="utrecht-button btn-sm btn-success">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
