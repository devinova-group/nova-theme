import { useState } from "react";
import { Box } from "theme-ui";

import { BoxProps as TableThemeUI } from "theme-ui";
import useSortableData from "../hooks/useSortableData";
import Field from "./Field";

export interface TableProps extends TableThemeUI {
  children?: React.ReactNode;
  expand?: boolean;
  data?: any;
  columns?: any;
}

const Table = (props: TableProps) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data, {
    key: "name",
    direction: "ascending",
  });

  return (
    <>
      <Box>
        {props.children}
        <Box
          {...props}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <table style={{ width: "80%" }}>
            <thead style={{ textAlign: "left" }}>
              <tr style={{ cursor: "pointer" }}>
                {props.columns &&
                  props.columns.map((column: any, index: number) => (
                    <th
                      onClick={() =>
                        requestSort(`${column.title.toLowerCase()}`)
                      }
                      key={index}
                    >
                      {column.title}
                      {/* Partly working */}
                      {sortConfig.direction === "ascending" ? "⬇️" : "⬆️"}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody style={{ textAlign: "left" }}>
              {items &&
                items.map((data: any) => (
                  <tr key={data.key}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.address}</td>
                    <td>
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </>
  );
};

export default Table;
