import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import JPT from "../../assets/jpt.svg";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search.split("=");
  console.log(
    !redirect?.[1],
    "redirect",
    redirect[1] !== null || redirect[1] !== "undefined"
  );
  useEffect(() => {
    if (redirect?.[1]) {
      axios({
        url: `${import.meta.env.VITE_API_URL}/user/admin`,
        method: "GET",
        headers: {
          authorization: `Bearer ${redirect[1]}`,
        },
      })
        .then((res) => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              role: res?.data?.user?.role,
              username: res?.data?.user?.username,
              token: redirect[1],
            })
          );
          navigate("/user");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  }, [redirect]);
  const twitterHandler = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/user/twitter/login`;
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img className="jpt_img_left" src={JPT} />
        <img className="jpt_img_right" src={JPT} />
        <div className="login_wrapper">
          {/* <img className="logo" src={Logo} /> */}
          <h2 className="logo_heading">SHILL-TO-EARN</h2>
          <span className="logo_intro">
            Post on Twitter with $SEM or @SemAtlman and earn!
          </span>
          <div className="login_btn" onClick={twitterHandler}>
            <span>Connect Twitter</span>
          </div>
          <p className="condition">
            By connecting your twitter you agree to the Terms of Use and Privacy
            Policy
          </p>
        </div>
      </div>
      <div className="footer_container">
        <div className="home_footer">
          <div className="footer_content">
            <h3>1</h3>
            <div className="footer_content_right">
              <h5>Sign Up</h5>
              <span>SIMPLY CONNECT YOUR TWITTER.</span>
            </div>
          </div>
          <div className="footer_content">
            <h3>2</h3>
            <div className="footer_content_right">
              <h5>post</h5>
              <span>EARN ELO FROM TWITTER POSTS.</span>
            </div>
          </div>
          <div className="footer_content">
            <h3>3</h3>
            <div className="footer_content_right">
              <h5>EARN</h5>
              <span>AND AUTOMATICALLY RECEIVE $SEM EVERY SINGLE WEEK!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
