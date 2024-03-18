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
    dataIndex: "imageUrl",
    key: "imageUrl",
    render:(imageUrl)=><img src={imageUrl} alt="pic"/>
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Tweet Count",
    dataIndex: "tweetsCount",
    key: "tweetsCount",
  },
  {
    title: "Replied Count",
    dataIndex: "replyCount",
    key: "replyCount",
  },
];

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [keyword, setKeyword] = useState("");
  const [data,setData]=useState([])

  useEffect(() => {
    axios({
      url: "http://localhost:4000/api/user/admin/all",
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => {
        setData(res?.data?.user);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  }, []);
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
          [data]
        )}
      </TableWrapper>
    </Wrapper>
  );
};

export default Dashboard;
