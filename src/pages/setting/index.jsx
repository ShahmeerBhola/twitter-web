import { HomeOutlined } from "@ant-design/icons";
import { Row, Col, Form } from "antd";
import React from "react";
import { Button } from "../../components";
import TextField from "../../components/input/text-field";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <Row
        justify={"end"}
        style={{ width: "90%", margin: "0 auto", padding: "30px 0" }}
      >
        <Col>
          <span style={{ marginRight: "10px" }}>
            <HomeOutlined onClick={() => navigate("/")} />
          </span>
          <span onClick={logoutHandler}>Logout</span>
        </Col>
      </Row>
      <h2 style={{ textAlign: "center", padding: "0 0 40px 0" }}>Settings</h2>
      <Wrapper>
        <Row>
          <Col>
            <h2 style={{ paddingBottom: "10px" }}>
              Power Post Engagement (Score)
            </h2>
            <Form layout="vertical">
              <TextField label="Like" />
              <TextField label="Quote" />
              <TextField label="Re-Tweet" />
              <TextField label="Replies" />
              <Button type="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 style={{ paddingBottom: "10px" }}>User Post/Tweet Engagement (Score)</h2>
            <Form layout="vertical">
              <TextField label="Like" />
              <TextField label="Quote" />
              <TextField label="Re-Tweet" />
              <TextField label="Replies" />
              <Button type="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default Setting;
