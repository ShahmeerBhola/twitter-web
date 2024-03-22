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
  TotalELO,
  PostContainer,
  PostDetail,
  PostView,
  SolanaWalletContainer,
} from "./styles";
import { Col, Row } from "antd";
import { HeartFilled, SyncOutlined } from "@ant-design/icons";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const salona = JSON.parse(localStorage.getItem("salona")) || null;
  const [wallet, setWallet] = useState(salona);
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
  const addWallet = () => {
    if (wallet !== "") {
      localStorage.setItem("salona", JSON.stringify(wallet));
      if (salona == null) {
        toast.success("Wallet Id Added Successful!");
      } else {
        toast.success("Wallet Id Updated Successful!");
      }
    }
    else{
      toast.error("Kindly add Wallet ID!.");

    }
  };
  return (
    <Wrapper>
      <ProfileWrapper>
        <img src={data?.imageUrl} />
        <h3>123shahmer{data?.username}</h3>
        <span onClick={logoutHandler}>Logout</span>
      </ProfileWrapper>
      <Container>
        {/* <Refer></Refer> */}
        <RankedTweet>
          <Heading>SHILL-TO-EARN</Heading>
          <Subtitle>Post on Twitter with $SEM or @SemAtlman and earn!</Subtitle>
          <TweetCount>
            <h4>Word For Tweet :</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              corporis perferendis commodi nostrum magni? Adipisci aliquam ex
              reiciendis saepe dolor! Cumque sequi delectus ut repudiandae.
            </p>
          </TweetCount>
          <TotalELO>
            <h1>
              {data?.poweredTweetCount &&
                data?.poweredTweetCount * 5 +
                  2 +
                  data?.poweredReplyCount * 10 +
                  data?.poweredReTweetCount * 15 +
                  data?.poweredQoTweetCount * 15}
            </h1>
            <h4>TOTAL ELO</h4>
          </TotalELO>
          <PostContainer>
            <PostDetail>
              <PostView>{data?.poweredTweetCount && 2 * 1}</PostView>
              <h2>VIEWS</h2>
              <span>1 View = 1 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                {data?.poweredTweetCount && data?.poweredTweetCount * 5}
              </PostView>
              <h2>LIKES</h2>
              <span>1 Like = 5 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                {data?.poweredReplyCount && data?.poweredReplyCount * 10}
              </PostView>
              <h2>REPLIES</h2>
              <span>1 Reply = 10 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                {data?.poweredReTweetCount && data?.poweredReTweetCount * 15}
              </PostView>
              <h2>RETWEETS</h2>
              <span>1 Retweet = 15 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                {data?.poweredQoTweetCount && data?.poweredQoTweetCount * 15}
              </PostView>
              <h2>QUOTES</h2>
              <span>1 Quote Tweet = 15 Elo</span>
            </PostDetail>
          </PostContainer>
          <SolanaWalletContainer>
            <h2>SOLANA WALLET ID</h2>
            <div>
              <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
              <div className="btn" onClick={addWallet}>
                {salona !== null ? "UPDATE" : "SAVE"}
              </div>
            </div>
          </SolanaWalletContainer>
          {/* power post */}
          {/* <PostEngagementContent>
          <PostEngagement>
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
            </PostEngagementContent> */}
          {/* user post */}
          {/* <PostEngagementContent>
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
                </PostEngagement>
              </Row>
            </PostEngagementContent> */}
        </RankedTweet>
        <LeaderBoard>
          <h2>LEADERBOARD</h2>
          <TopBoard>
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
