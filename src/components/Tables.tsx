import React from "react";
import { Box, Card, Flex } from "theme-ui";
import Badge from "../library/Badge";
import Table from "../library/Table";
import Text from "../library/Text";

function Tables() {
  const columns = [
    {
      key: "name",
      title: "Name",
      render: (name: string) => <Text>{name}</Text>,
      style: { paddingBottom: "10px" },
      sx: { border: "1px solid green" },
    },
    {
      key: "email",
      title: "Email",
      render: (email: string) => <Text>{email}</Text>,
      style: {},
    },
    {
      key: "status",
      title: "Status",
      render: (status: string[]) => (
        <Flex>
          {status.map((action: string, index: number) => (
            <Flex key={index}>
              <Badge variant={action}>{action}</Badge>
            </Flex>
          ))}
        </Flex>
      ),
      style: {},
    },
  ];
  const rows = [
    {
      id: 1,
      name: "Baillie Devin",
      email: "bdevin0@twitter.com",
      phone: "(244) 4222745",
      status: ["inActive", "inActive"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 2,
      name: "Zacharie Bwye",
      email: "zbwye1@webs.com",
      phone: "(845) 4463753",
      status: ["active", "inActive"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 3,
      name: "Merv Stoke",
      email: "mstoke2@squarespace.com",
      phone: "(258) 9714780",
      status: ["error", "inActive"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 4,
      name: "Janessa Clymer",
      email: "jclymer3@tuttocitta.it",
      phone: "(216) 5889221",
      status: ["disabled", "inActive"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 5,
      name: "Blakeley Plumtree",
      email: "bplumtree4@phpbb.com",
      phone: "(524) 2531171",
      status: ["active", "inActive"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
  ];
  type TableRowType = {
    key?: string | number;
    row?: string;
    name?: string;
    actions?: string[];
  };
  const expandableContent = (row: TableRowType) => {
    return (
      <Box m="3" backgroundColor={"GrayText"} color={"white"}>
        <Text p="2" as="div">
          {row.name}
        </Text>
      </Box>
    );
  };

  return (
    <Table
      columns={columns}
      rows={rows}
      expandableContent={expandableContent}
    />
  );
}

export default Tables;
