import { useState } from "react";
import { Box } from "theme-ui";

import { BoxProps as TableThemeUI } from "theme-ui";
import useSortableData from "../hooks/useSortableData";

export interface TableProps extends TableThemeUI {
  children?: React.ReactNode;
  expand?: boolean;
  data?: any;
  columns?: any;
}

const Table = (props: TableProps) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.data,
    "ascending"
  );
  return (
    <Box>
      {props.children}
      <Box
        {...props}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <table style={{ width: "80%" }}>
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th onClick={() => requestSort("name")}>Name</th>
              <th onClick={() => requestSort("age")}>Age</th>
              <th onClick={() => requestSort("address")}>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "left" }}>
            {items.map((data: any) => (
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
  );
};

export default Table;

/* onClick={() => handleClick("name")} */
/* onClick={() => handleNumber("age")} */
/* onClick={() => handleClick("address")} */
/* onClick={() => handleDelete(data)} */
/*   const [newData, setNewData] = useState(props.data);
  const [order, setOrder] = useState("ASC");
  const [orderNumber, setOrderNumber] = useState("1"); */

/* const handleDelete = (data: any) => {
    console.log(data);
  };
  const handleNumber = (col: any) => {
    if (orderNumber === "1") {
      const sorded = [...newData].sort((a, b) => (a.age > b.age ? 1 : -1));
      setOrderNumber("2");
      setNewData(sorded);
    }
    if (orderNumber === "2") {
      const sorded = [...newData].sort((a, b) => (a.age < b.age ? 1 : -1));
      setOrderNumber("1");
      setNewData(sorded);
    }
  };
  const handleClick = (col: any) => {
    if (order === "ASC") {
      const sorded = [...newData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setNewData(sorded);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorded = [...newData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setNewData(sorded);
      setOrder("ASC");
    }
  }; */
