import {
  Table,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCaption,
  TableFooter,
  TableCell,
  TableHeader
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";
import "./Table.css";

interface TableComponentProps {
  columns: Array<Partial<Record<"field" | "headerName" | "renderCell" | "hidden" | "valueFormatter", any>>>;
  rows: Array<Record<any, any>>;
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, rows }) => {
  return (
    <Table className="Table">
      <TableHeader className="Table-header">
        <TableRow>
          {columns.map((item, index) => (
            <TableHeaderCell className="Table-header-cell" key={index}>{item.headerName ?? item.field}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="Table-body">
        {rows.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column, idx) =>
              Object.keys(row).includes(column.field) && !column.hidden ? (
                column.renderCell ? (
                  <TableCell className="Table-body-cell" key={idx}>
                    {column.renderCell(row)}
                  </TableCell>
                ) : (
                  <TableCell className="Table-body-cell" key={idx}>
                    {column.valueFormatter ? column.valueFormatter(row[column.field]) : row[column.field]}
                  </TableCell>
                )
              ) : (
                <TableCell key={idx}></TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
