import React, { useState } from "react";
import { Button, CustomTextArea } from "../../components";
import { TableWrapper, TextWrapper, Wrapper } from "./styles";
import { Table, Row, Col, Popconfirm } from "antd";
import { useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Pic",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: (imageUrl) => <img src={imageUrl} alt="pic" />,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Total ELO",
    dataIndex: "toTal",
    key: "toTal",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_API_URL}/user/admin/all`,
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

  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const exportData = () => {
    axios({
      url: `${import.meta.env.VITE_API_URL}/user/admin/updateValues`,
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(res?.data?.allUSERS)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };  
  return (
    <Wrapper>
      <Row justify={"end"}>
        <Col>
          <span style={{ marginRight: "10px" }}>
            <SettingOutlined onClick={() => navigate("setting")} />
          </span>
          <span onClick={logoutHandler}>Logout</span>
        </Col>
      </Row>
      <h2>Dashboard</h2>
      <Popconfirm
    title="Claim Reward"
    description="Are you sure to claim reward?"
    onConfirm={exportData}
    okText="Yes"
    cancelText="No"
  >
      <Button type="primary" style={{width:"100px"}}>
        Claim
      </Button>
  </Popconfirm>

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
