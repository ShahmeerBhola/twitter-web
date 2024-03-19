import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Wrapper,
  ProfileWrapper,
  TextWrapper,
  TweetCount,
  Refer,
  RankedTweet,
  LeaderBoard,
  Subtitle,
  Heading,
  Container,
  Post,
  HeadingPost,
  PostTweet,
  PostEngagement,
  PostEngagementContent,
  RightCol,
  TopBoard,
  TopBoardCol,
} from "./styles";
import { Col, Row } from "antd";
import { HeartFilled, SyncOutlined } from "@ant-design/icons";

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

  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={data?.imageUrl} />
        <h3>{data?.username}</h3>
        <span onClick={logoutHandler}>Logout</span>
      </ProfileWrapper>
      <Container>
        {/* <Refer></Refer> */}
        <RankedTweet>
          <Heading>RANKED by sheldon</Heading>
          <Subtitle>
            Earn ELO by engaging with us on X/Twitter to convert to $sem
          </Subtitle>
          <TextWrapper>
            <h4>Current Keyword :</h4>
            <p>{keyword}</p>
          </TextWrapper>
          <Post>
            <HeadingPost>Power Post</HeadingPost>
            <PostTweet>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <div style={{ borderRadius: "8px", background: "blue" }}>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur, in.
                  </span>
                </div>
                <div style={{ borderRadius: "8px", background: "blue" }}>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur, in.
                  </span>
                </div>
              </div>
            </PostTweet>
          </Post>
          <PostEngagement>
            {/* power post */}
            <PostEngagementContent>
              <h5>Gamini Power Post Engagement</h5>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <HeartFilled style={{ paddingRight: "10px" }} />
                    LIKES (20 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-quote-right"></i>QUOTE (60 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <SyncOutlined style={{ paddingRight: "10px" }} />
                    REPOST (50 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-reply"></i>
                    REPLIES (40 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
            </PostEngagementContent>
            {/* user post */}
            <PostEngagementContent>
              <h5>Your posts/tweets engagement ELO tagging @gaminio</h5>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <HeartFilled style={{ paddingRight: "10px" }} />
                    LIKES (20 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-quote-right"></i>QUOTE (60 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <SyncOutlined style={{ paddingRight: "10px" }} />
                    REPOST (50 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-reply"></i>
                    REPLIES (40 ELO)
                  </p>
                </Col>
                <RightCol>
                  0(0 ELO)<span>/5</span>
                </RightCol>
              </Row>
            </PostEngagementContent>
          </PostEngagement>
        </RankedTweet>
        <LeaderBoard>
          <TopBoard>
            <h3>LEADERBOARD (TOP500)</h3>
            <h5>*ELO updated every few days</h5>
            <Row justify={"space-between"} align={"middle"}>
              <TopBoardCol flexDirection="row">
                <span>1</span>
                <img
                  src={
                    "https://pbs.twimg.com/profile_images/1767751585885462528/X9B-4KZL_normal.jpg"
                  }
                />
                <span>name</span>
              </TopBoardCol>
              <RightCol>
                <p>3.11 ELo</p>
              </RightCol>
            </Row>
            {/* hello */}
            <Row justify={"space-between"} align={"middle"}>
              <TopBoardCol flexDirection="row">
                <span>1</span>
                <img
                  src={
                    "https://pbs.twimg.com/profile_images/1767751585885462528/X9B-4KZL_normal.jpg"
                  }
                />
                <span>name</span>
              </TopBoardCol>
              <RightCol>
                <p>3.11 ELo</p>
              </RightCol>
            </Row>
            <Row justify={"space-between"} align={"middle"}>
              <TopBoardCol flexDirection="row">
                <span>1</span>
                <img
                  src={
                    "https://pbs.twimg.com/profile_images/1767751585885462528/X9B-4KZL_normal.jpg"
                  }
                />
                <span>name</span>
              </TopBoardCol>
              <RightCol>
                <p>3.11 ELo</p>
              </RightCol>
            </Row>
          </TopBoard>
        </LeaderBoard>
      </Container>
      {/* <TextWrapper>
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
      </TweetCount> */}
    </Wrapper>
  );
};

export default UserDashboard;
