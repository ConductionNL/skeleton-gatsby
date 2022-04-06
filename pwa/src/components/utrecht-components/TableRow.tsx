/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from "clsx";
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import * as React from "react";

type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export const TableRow = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<TableRowProps>, ref: ForwardedRef<HTMLTableRowElement>) => (
    <tr {...restProps} ref={ref} className={clsx("utrecht-table__row", className)}>
      {children}
    </tr>
  ),
);

TableRow.displayName = "utrecht-table-row";
