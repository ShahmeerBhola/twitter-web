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
  ButtonWrapper,
  Profile,
  MobProfileWrapper,
  Sidebar,
} from "./styles";
import { Col, Flex, Row } from "antd";
import View from "../../assets/views.svg";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";
import retweet from "../../assets/retweet.svg";
import edit from "../../assets/edit.svg";
import close from "../../assets/close.svg";
import mob_menu from "../../assets/mob_menu.svg";
import dots from "../../assets/dots.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import '../../font.css';
// Import the styles for the wallet adapter components (optional)

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const salona = JSON.parse(localStorage.getItem("salona")) || null;
  const [data, setData] = useState("");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState("");
  const { publicKey, select, wallets, disconnect } = useWallet();
  console.log(publicKey);
  const performAction = async () => {
    const wallet = wallets.find((item) => item?.adapter?.name === "Phantom");
    if (wallet?.readyState === "Installed") {
      select(wallet.adapter.name);
    } else {
      toast.error("Kindly add the Wallet");
    }
  };

  useEffect(() => {
    if (publicKey !== null) {
      axios({
        url: `${import.meta.env.VITE_API_URL}/user/admin/addWallet`,
        method: "POST",
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
        data: { wallet: publicKey },
      }).then((res) => {
        setData(res?.data?.user);
      });
    }
  }, [publicKey]);

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
      url: `${import.meta.env.VITE_API_URL}/user/admin/userRank`,
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => {
        setData(res?.data?.user);
        setRank(res?.data?.rank);
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
        <ButtonWrapper
          className="btn"
          onClick={
            !publicKey
              ? performAction
              : () => {
                  disconnect();
                }
          }
        >
          {publicKey ? (
            <span>{publicKey.toBase58()}</span>
          ) : (
            <span>Connect Wallet</span>
          )}
        </ButtonWrapper>
        <Flex align={"center"} gap="20px">
          <span onClick={logoutHandler}>Log Out</span>
          <Profile>
            <img src={data?.imageUrl} />
            <h3>@{data?.username}</h3>
          </Profile>
        </Flex>
      </ProfileWrapper>
      <MobProfileWrapper>
        <Profile>
          <img src={data?.imageUrl} />
          <h3>@{data?.username}</h3>
        </Profile>
        <img src={mob_menu} onClick={() => setOpen(true)} />
      </MobProfileWrapper>
      {open && (
        <Sidebar>
          <Flex justify={"space-between"}>
            <Flex align={"center"} gap="20px">
              <Profile>
                <img src={data?.imageUrl} />
                <h3>@{data?.username}</h3>
              </Profile>
              <span onClick={logoutHandler}>Log Out</span>
            </Flex>
            <img src={close} onClick={() => setOpen(false)} />
          </Flex>
          <Flex vertical gap="10px" style={{ width: "190px", paddingTop: 30 }}>
            <h3>Wallet</h3>
            <ButtonWrapper
              onClick={
                !publicKey
                  ? performAction
                  : () => {
                      disconnect();
                    }
              }
            >
              {publicKey ? (
                <span>{publicKey.toBase58()}</span>
              ) : (
                <span>Connect Wallet</span>
              )}
            </ButtonWrapper>
          </Flex>
        </Sidebar>
      )}
      <Container>
        {/* <Refer></Refer> */}
        <RankedTweet>
          <Heading>SHILL-TO-EARN</Heading>
          <Subtitle>Post on Twitter with $SEM or @SemAtlman and earn!</Subtitle>
          {/* <TweetCount>
            <h4>Word For Tweet :</h4>
            <p>{keyword}</p>
          </TweetCount> */}
          <TotalELO>
            <div>
              <img src={dots} />
            </div>
            <h1>{data?.totalElo && data?.totalElo}</h1>
            <h4>TOTAL ELO</h4>
          </TotalELO>
          <PostContainer>
            <PostDetail>
              <PostView>
                <img src={View} />
                <div>
                  {data?.poweredViewCount && data?.poweredViewCount * 1}
                  <span>1 View = 1 Elo</span>
                </div>
                <h2>VIEWS</h2>
              </PostView>
              <span>1 View = 1 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                <img src={heart} />
                <div>
                  {data?.poweredlikedCount && data?.poweredlikedCount * 5}
                  <span>1 Like = 5 Elo</span>
                </div>
                <h2>LIKES</h2>
              </PostView>
              <span>1 Like = 5 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                <img src={chat} />
                <div>
                  {data?.poweredReplyCount && data?.poweredReplyCount * 10}
                  <span>1 Reply = 10 Elo</span>
                </div>{" "}
                <h2>REPLIES</h2>
              </PostView>
              <span>1 Reply = 10 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                <img src={retweet} />
                <div>
                  {data?.poweredReTweetCount && data?.poweredReTweetCount * 15}
                  <span>1 Retweet = 15 Elo</span>
                </div>
                <h2>RETWEETS</h2>
              </PostView>
              <span>1 Retweet = 15 Elo</span>
            </PostDetail>
            <PostDetail>
              <PostView>
                <img src={edit} />
                <div>
                  {data?.poweredQoTweetCount && data?.poweredQoTweetCount * 15}
                  <span>1 Quote Tweet = 15 Elo</span>
                </div>
                <h2>QUOTES</h2>
              </PostView>
              <span>1 Quote Tweet = 15 Elo</span>
            </PostDetail>
          </PostContainer>
          {/* <SolanaWalletContainer>
            <h2>SOLANA WALLET ID</h2>
            <div>
              <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
              <div className="btn" onClick={addWallet}>
                {data?.walletAddress !== "" ? "UPDATE" : "SAVE"}
              </div>
            </div>
          </SolanaWalletContainer> */}
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
          <TopBoard>
            <h2>Leaderboard</h2>
            {users?.length > 0 &&
              users?.map((item, index) => (
                <Row
                  className={`row ${data?._id === item?._id && "active"}`}
                  key={item?._id + index}
                  justify={"space-between"}
                  align={"middle"}
                >
                  <TopBoardCol flexDirection="row">
                    <span className="num">{index + 1}</span>
                    <img src={item?.imageUrl} />
                    <span>{item?.username}</span>
                  </TopBoardCol>
                  <RightCol>
                    <p>{item?.totalElo} ELO</p>
                  </RightCol>
                </Row>
              ))}
            <>
              {rank > 10 && (
                <>
                  <Subtitle>Your Place</Subtitle>
                  <Row
                    className="row active"
                    key={data?._id}
                    justify={"space-between"}
                    align={"middle"}
                  >
                    <TopBoardCol flexDirection="row">
                      <span className="num">{rank}</span>
                      <img src={data?.imageUrl} />
                      <span>{data?.username}</span>
                    </TopBoardCol>
                    <RightCol>
                      <p>{data?.totalElo} ELO</p>
                    </RightCol>
                  </Row>
                </>
              )}
            </>
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
