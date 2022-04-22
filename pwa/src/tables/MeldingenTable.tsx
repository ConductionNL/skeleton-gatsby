import * as React from "react";
import {
  Table,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableHeader,
} from "@utrecht/component-library-react/dist";
import {Link} from "gatsby";

interface MeldingenProps {
  meldingen: any[];
}

export const MeldingenTable: React.FC<MeldingenProps> = ({ meldingen }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Date created</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {meldingen.map((melding: any, idx) => (
          <TableRow key={idx}>
            <TableCell>{melding.title}</TableCell>
            <TableCell>{melding.description}</TableCell>
            <TableCell>{new Date(melding["@dateCreated"]).toLocaleString("nl-NL")}</TableCell>
            <TableCell> <Link to={`/meldingen/${melding?.id}`}>Details</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
