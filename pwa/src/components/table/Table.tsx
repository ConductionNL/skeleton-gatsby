import * as React from "react";
import {
  Table as UTable,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableHeader,
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

interface TableProps {
  headers: string[];
  rows: Array<string | JSX.Element>[];
}

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <UTable>
      <TableHeader>
        <TableRow>
          {headers.map((header, idx) => (
            <TableHeaderCell key={idx}>{header}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={idx}>
            {row.map((cell, idx) => (
              <TableCell key={idx}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </UTable>
  );
};
