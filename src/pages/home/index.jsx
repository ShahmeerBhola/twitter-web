import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Person from "../../assets/person.svg";
import dots from "../../assets/dots.svg";
import { ShillEarn, TotalELO } from "../user-dashboard/styles";

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
    window.location.href = `https://backend.shilltoearn.com/api/user/twitter/login`;
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="login_wrapper">
          <img className="logo" src={Person} />
          <ShillEarn>
            <div>
              <img src={dots} />
            </div>
            <h1>SHILL-TO-EARN</h1>
          </ShillEarn>
          <span className="logo_intro">
            Post on Twitter with $SEM or @SemAtlman and earn!
          </span>
          <div className="login_btn" onClick={twitterHandler}>
            <span>Connect Twitter</span>
          </div>
          <p className="condition">
            By connecting your twitter you agree to the{" "}
            <span>Terms of Use and Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="footer_container">
        <div className="home_footer">
          <div className="footer_content">
            <h3>1</h3>
            <div className="footer_content_right">
              <h5>Sign Up</h5>
              <span>Simply connect your Twitter</span>
            </div>
          </div>
          <div className="footer_content">
            <h3>2</h3>
            <div className="footer_content_right">
              <h5>post</h5>
              <span>Earn Elo from Twitter posts</span>
            </div>
          </div>
          <div className="footer_content">
            <h3>3</h3>
            <div className="footer_content_right">
              <h5>EARN</h5>
              <span>And automatically receive $SEM every single week!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
