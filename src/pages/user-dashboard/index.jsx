import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Wrapper, ProfileWrapper, TextWrapper, TweetCount } from "./styles";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");
  console.log(data, "user", keyword);
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

  useEffect(() => {
    axios({
      url: "http://localhost:4000/api/user/admin",
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

  const logoutHandler=()=>{
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={data?.imageUrl} />
        <h3>{data?.username}</h3>
        <span onClick={logoutHandler}>Logout</span>
      </ProfileWrapper>
      <TextWrapper>
        <h4>Current Keyword :</h4>
        <p>{keyword}</p>
      </TextWrapper>
      <TweetCount>
        <h4>Tweets Count :</h4>
        <p>{data?.tweetsCount}</p>
      </TweetCount>
      <TweetCount>
        <h4>Replies Count :</h4>
        <p>{data?.replyCount}</p>
      </TweetCount>
    </Wrapper>
  );
};

export default UserDashboard;
