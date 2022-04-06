import * as React from "react";

// Disabled till fixed
// import { Heading1 } from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

// To make Utrechts components working for now, copy a component to our /pwa/src/components/utrecht-components
// directory and uncomment the export in utrecht-components/index.ts
import {
  Heading1,
  Page,
  PageContent,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableBody,
  Button,
  FormField,
  Textbox,
  FormLabel,
} from "../components/utrecht-components";

const IndexPage = () => {
  return (
    <>
      <Heading1>Welcome to the skeleton</Heading1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Barry</TableCell>
            <TableCell>Brands</TableCell>
            <TableCell>19</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
      <FormField>
        <FormLabel htmlFor="testInput">Label</FormLabel>
        <Textbox id="testInput" name="test" />
      </FormField>
      <Button>Submit</Button>
    </>
  );
};

export default IndexPage;
