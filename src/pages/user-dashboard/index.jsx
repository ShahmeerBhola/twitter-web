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
  const [users, setUsers] = useState([]);
  console.log(data, "user", keyword);
  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_API_URL}/keyword`,
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
      url: `${import.meta.env.VITE_API_URL}/user/admin/all`,
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => {
        setUsers(res?.data?.user);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  }, []);

  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_API_URL}/user/admin`,
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
                <div style={{ borderRadius: "8px", background: "blue", minHeight:'40px' }}>
                  <span>{keyword}</span>
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
                  {data?.poweredTweetCount && data?.poweredTweetCount}(
                  {data?.poweredTweetCount && data?.poweredTweetCount * 20} ELO)
                  <span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-quote-right"></i>QUOTE (60 ELO)
                  </p>
                </Col>
                <RightCol>
                  {data?.poweredQoTweetCount && data?.poweredQoTweetCount}(
                  {data?.poweredQoTweetCount && data?.poweredQoTweetCount * 60}{" "}
                  ELO)<span>/5</span>
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
                  {data?.poweredReTweetCount && data?.poweredReTweetCount}(
                  {data?.poweredReTweetCount && data?.poweredReTweetCount * 50}
                  ELO)<span>/5</span>
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
                  {data?.poweredReplyCount && data?.poweredReplyCount}(
                  {data?.poweredReplyCount && data?.poweredReplyCount * 40}
                  ELO)<span>/5</span>
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
                    LIKES (10 ELO)
                  </p>
                </Col>
                <RightCol>
                  {data?.keywordTweetCount && data?.keywordTweetCount}(
                  {data?.keywordTweetCount && data?.keywordTweetCount * 10}
                  ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-quote-right"></i>QUOTE (30 ELO)
                  </p>
                </Col>
                <RightCol>
                  {data?.keywordQoTweetCount && data?.keywordQoTweetCount}(
                  {data?.keywordQoTweetCount && data?.keywordQoTweetCount * 30}
                  ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <SyncOutlined style={{ paddingRight: "10px" }} />
                    REPOST (25 ELO)
                  </p>
                </Col>
                <RightCol>
                  {data?.keywordReTweetCount && data?.keywordReTweetCount}(
                  {data?.keywordReTweetCount && data?.keywordReTweetCount * 25}
                  ELO)<span>/5</span>
                </RightCol>
              </Row>
              <Row justify={"space-between"}>
                <Col>
                  <p>
                    <i class="icon fa-solid fa-reply"></i>
                    REPLIES (20 ELO)
                  </p>
                </Col>
                <RightCol>
                  {data?.keywordReplyCount && data?.keywordReplyCount}(
                  {data?.keywordReplyCount && data?.keywordReplyCount * 20}
                  ELO)<span>/5</span>
                </RightCol>
              </Row>
            </PostEngagementContent>
          </PostEngagement>
        </RankedTweet>
        <LeaderBoard>
          <TopBoard>
            <h3>LEADERBOARD (TOP500)</h3>
            <h5>*ELO updated every few days</h5>
            {users?.length > 0 &&
              users?.map((item, index) => (
                <Row
                  key={item?._id + index}
                  justify={"space-between"}
                  align={"middle"}
                >
                  <TopBoardCol flexDirection="row">
                    <span>{index + 1}</span>
                    <img src={item?.imageUrl} />
                    <span>{item?.username}</span>
                  </TopBoardCol>
                  <RightCol>
                    <p>{item?.total} ELO</p>
                  </RightCol>
                </Row>
              ))}
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
