import React from "react";
import Table from "../library/Table";

function Tables() {
  const columns = [
    {
      id: 1,
      title: "Name",
      dataIndex: "name",
    },
    {
      id: 2,
      title: "Email",
      dataIndex: "email",
    },
    {
      id: 3,
      title: "Phone",
      dataIndex: "phone",
    },
    {
      id: 4,
      title: "Status",
      dataIndex: "",
    },
    {
      id: 5,
      title: "Action",
      dataIndex: "",
    },
  ];
  const data = [
    {
      id: 1,
      name: "Baillie Devin",
      email: "bdevin0@twitter.com",
      phone: "(244) 4222745",
      status: "inActive",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 2,
      name: "Zacharie Bwye",
      email: "zbwye1@webs.com",
      phone: "(845) 4463753",
      status: "active",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 3,
      name: "Merv Stoke",
      email: "mstoke2@squarespace.com",
      phone: "(258) 9714780",
      status: "error",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 4,
      name: "Janessa Clymer",
      email: "jclymer3@tuttocitta.it",
      phone: "(216) 5889221",
      status: "disabled",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
    {
      id: 5,
      name: "Blakeley Plumtree",
      email: "bplumtree4@phpbb.com",
      phone: "(524) 2531171",
      status: "active",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam.",
    },
  ];
  return <Table columns={columns} data={data}></Table>;
}

export default Tables;
