import React, { useState } from "react";
import { Button, TextField } from "../../components";
import { TableWrapper, TextWrapper, Wrapper } from "./styles";
import { Table } from "antd";
import { useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const columns = [
  {
    title: "Pic",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Username",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tweet COunt",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Replied Count",
    dataIndex: "address",
    key: "address",
  },
];

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios({
      url: "http://localhost:4000/api/keyword",
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    }).then((res) => {
      setKeyword(res?.data.keyword);
    });
  }, []);
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];
  const addKeyword = () => {
    if (keyword !== "") {
      axios({
        url: "http://localhost:4000/api/keyword",
        method: "POST",
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
        data: {
          keyword,
        },
      }).then((res) => {
        setKeyword(res?.data.keyword);
        toast.success("Keyword added Successful!!");
      });
    } else {
      toast.error("Kindly insert the keyword");
    }
  };

  const logoutHandler=()=>{
    localStorage.removeItem("user")
    window.location.reload()
  }
  return (
    <Wrapper>
      <span onClick={logoutHandler}>Logout</span>
      <h2>Dashboard</h2>
      <TextWrapper>
        <TextField
          placeholder="Enter a keyword"
          label={"keyword"}
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Button type="primary" onClick={addKeyword}>
          Submit
        </Button>
      </TextWrapper>
      <TableWrapper>
        {useMemo(
          () => (
            <Table dataSource={data} columns={columns} pagination={false} />
          ),
          []
        )}
      </TableWrapper>
    </Wrapper>
  );
};

export default Dashboard;
