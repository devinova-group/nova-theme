import { useState } from "react";
import { Box } from "theme-ui";

import { BoxProps as TableThemeUI } from "theme-ui";
import useSortableData from "../hooks/useSortableData";
import Field from "./Field";

export interface TableProps extends TableThemeUI {
  children?: React.ReactNode;
  data?: any;
  columns?: any;
}

const Table = (props: TableProps) => {
  const { children, data, columns } = props;
  const [dataState, setDataState] = useState("");
  const { items, requestSort, sortConfig } = useSortableData(data, {
    key: "name",
    direction: "ascending",
  });
  return (
    <Box variant="tables">
      <Field
        type="search"
        style={{
          width: "200px",
        }}
        onChange={(e) => setDataState(e.target.value)}
        placeholder="Search name"
      />
      <Box>
        {children}
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
                {columns &&
                  columns.map((column: any) => (
                    <th
                      key={column.key}
                      onClick={() =>
                        requestSort(`${column.title.toLowerCase()}`)
                      }
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
                items
                  .filter((post: any) => {
                    if (dataState === "") {
                      return post;
                    } else if (
                      post.name.toLowerCase().includes(dataState.toLowerCase())
                    ) {
                      return post;
                    }
                  })
                  .map((data: any) => (
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
    </Box>
  );
};

export default Table;
