import { useState } from "react";
import { Box, Label } from "theme-ui";

import { BoxProps as TableThemeUI } from "theme-ui";
import { useSearch } from "../hooks/useSearch";
import useSortableData from "../hooks/useSortableData";
import Badge from "./Badge";
import Checkbox from "./Checksbox";
import Field from "./Field";

export interface TableProps extends TableThemeUI {
  children?: React.ReactNode;
  data?: any;
  columns?: any;
}
const Table = (props: TableProps) => {
  const { children, data, columns } = props;

  const { items, requestSort, sortConfig } = useSortableData(data, {
    key: "name",
    direction: "ascending",
  });

  const { search, filtered, onChange } = useSearch("name", "email", data);
  /*   const expandRow = () => {};
  const [row, setRow] = useState(false); */
  return (
    <Box variant="tables">
      <Field
        type="search"
        style={{
          width: "200px",
        }}
        value={search}
        onChange={onChange}
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
                <th>
                  <Label>
                    <Checkbox />
                  </Label>
                </th>
                {columns &&
                  columns.map((column: any) => (
                    <th
                      key={column.id}
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
              {filtered.length <= 0 ? (
                <tr>
                  <td>Opps! No Results found...</td>
                </tr>
              ) : (
                filtered.map((data: any) => (
                  <tr key={data.id}>
                    <th>
                      <Label>
                        <Checkbox />
                      </Label>
                    </th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                      <Badge variant={`${data.status}`}>
                        {data.status.toLowerCase()}
                      </Badge>
                    </td>
                    <td /* onClick={() => setRow(true)} */>
                      <span>View More</span>
                      {/*  <i> |</i> */}
                    </td>
                    {/*   <td>{data.description}</td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
