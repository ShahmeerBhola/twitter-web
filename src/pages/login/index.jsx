import { Form } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LoginForm,
  SubmitButton,
  Title,
  Wrapper,
} from "./styles";
import { useEffect, useState } from "react";
import { TextField } from "../../components";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) {
      setInterval(() => setError(false), 5000);
    }
  }, [error]);
  const handleSubmit = (values) => {
    if (values.email !== "" && values.password !== "") {
      axios({
        url: `${import.meta.env.VITE_API_URL}/user/admin/login`,
        method: "POST",
        headers: {},
        data: values,
      })
        .then((res) => {
          form.resetFields();
          toast.success("Login Successfully!");
          localStorage.setItem(
            "user",
            JSON.stringify({ role: res?.data?.user?.role, token: res?.data?.token })
          );
          navigate("/admin");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    form.submit();
  }, []);

  return (
    <Wrapper>
      <Title level={1}>Log In</Title>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email"
          name="email"
          autoComplete="off"
        />
        <TextField
          required
          type="password"
          message="Password  is Required!"
          placeholder="Enter your Password"
          label="Password"
          name="password"
          autoComplete="off"
        />
        <SubmitButton block type="primary" htmlType="submit">
          Sign In
        </SubmitButton>
      </LoginForm>
    </Wrapper>
  );
};

export default Login;
