import { Box, Grid } from "theme-ui";

import { BoxProps as TableThemeUI } from "theme-ui";
import useAccordion from "../hooks/useAccordion";
import { useSearch } from "../hooks/useSearch";
import useSortableData from "../hooks/useSortableData";
import Accordion from "./Accordion";
import Field from "./Field";

interface TableProps extends TableThemeUI {
  rows?: object[];
  columns?: object[];
  expandableContent?: (row: any) => JSX.Element;
}
const Table = (props: TableProps) => {
  const { rows, columns, expandableContent } = props;
  const { onClick, toggleAccordion } = useAccordion();
  const { items, requestSort, sortConfig } = useSortableData(rows!, {
    key: "name",
    direction: "ascending",
  });

  const { search, filtered, onChange } = useSearch(["name", "email"], items);

  interface Column {
    key?: string;
    title?: string;
    render?: (
      x: string | any | Array<string>
    ) => JSX.Element | string | Array<string> | any;
    style?: object;
    sx?: object;
    grids?: string;
  }

  const renderHeader = columns!.map((column: Column) => (
    <Box
      sx={{ m: 3, ...column.sx }}
      style={column.style}
      onClick={() => requestSort(`${column.key!.toLowerCase()}`)}
      key={column.key}
    >
      {column.title}
      {sortConfig.direction === "ascending" ? "⬇️" : "⬆️"}
    </Box>
  ));

  function createStringOfArray(arr: string[]) {
    return `${arr.join().replaceAll(",", " ")}`;
  }
  interface Row {
    id?: number | string;
    name?: string;
    email?: string;
    phone?: string;
    status?: string[];
    description?: string;
  }
  const renderRows = filtered.map((row: any) => (
    <div key={row.id}>
      <Grid
        sx={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        gap="0"
        columns={createStringOfArray(
          columns!.map((column: Column) => column.grids!)
        )}
      >
        {columns!.map((column: Column) => (
          <Box key={column.key} onClick={() => onClick()}>
            {/* row[column.key! ROW ??? */}
            {column.render!(row[column.key!])}
          </Box>
        ))}
      </Grid>
      <Accordion toggleAccordion={toggleAccordion}>
        {expandableContent!(row)}
      </Accordion>
    </div>
  ));

  return (
    <div>
      <Box p="1" sx={{ width: "50%" }}>
        <Field
          type="search"
          style={{
            width: "200px",
          }}
          value={search}
          onChange={onChange}
          placeholder="Search name"
        />

        <Grid
          sx={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          gap="0"
          columns={createStringOfArray(
            columns!.map((column: Column) => column.grids!)
          )}
        >
          {renderHeader}
        </Grid>
        {renderRows}
      </Box>
    </div>
  );
};

export default Table;
