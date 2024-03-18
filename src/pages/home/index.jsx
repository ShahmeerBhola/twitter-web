import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const location = useLocation();
  const redirect = location.search.split("=");
  // useEffect(() => {
  //   if (redirect[1] !== null) {
  //     localStorage.setItem("token",  redirect[1]);
  //   }
  // }, [redirect]);
  const twitterHandler = () => {
    window.location.href = "http://localhost:4000/api/user/twitter/login";
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="login_wrapper">
          <h1 className="heading">$sem rewards with</h1>
          {/* <img className="logo" src={Logo} /> */}
          <h2 className="logo_heading">Shill to earn</h2>
          <div className="login_btn" onClick={twitterHandler}>
            <i class="icon fa fa-twitter"></i>
            <span>Connect Twitter</span>
          </div>
          <p className="condition">
            By connecting your twitter you agree to our Terms of Use and Privacy
            Policy
          </p>
        </div>
        <div className="home_footer">
          <div className="footer_content">
            <h3>01</h3>
            <h5>Sign Up</h5>
            <span>Simply connect your Twitter to get playing</span>
          </div>
          <div className="footer_content">
            <h3>02</h3>
            <h5>Create & Earn</h5>
            <span>Earn ELO from your Twitter content</span>
          </div>
          <div className="footer_content">
            <h3>03</h3>
            <h5>Claim $sem Reward</h5>
            <span>Your ELO converts to reward you $sem</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;