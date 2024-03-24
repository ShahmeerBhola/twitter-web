import styled from "styled-components";
import { Col } from "antd";

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  padding-top: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background: #030208;
  color: #fff;
  @media (max-width: 800px) {
    padding: 20px;
    padding-top: 0;
  }
  @media (max-width: 450px) {
    padding: 10px;
    padding-top: 0;
  }
`;

export const ProfileWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  background: #030208;
  padding: 10px 0;
  width: calc(100% - 100px);
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  span {
    color: #6a6a6a;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    width: calc(100% - 40px);
  }
  @media (max-width: 600px) {
    display: none;
  }
  .btn {
    width: 190px;
  }
`;
export const MobProfileWrapper = styled.div`
  position: fixed;
  flex-direction: row;
  background: #030208;
  padding: 5px 0;
  width: calc(100% - 40px);
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
  img {
    cursor: pointer;
  }
`;
export const Sidebar = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 10px;
  img {
    width: 30px;
    cursor: pointer;
  }
`;
export const Container = styled.div`
  flex: 1;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Refer = styled.div`
  width: 30%;
`;

export const RankedTweet = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1050px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    gap: 10px;
  }
`;

export const LeaderBoard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  h2 {
    letter-spacing: 2px;
    text-align: start;
  }
  @media (max-width: 1050px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 16px;
    }
  }
`;

export const Heading = styled.h1`
  color: #fff;
  line-height: 1.2;
  font-weight: bolder;
  font-size: 38px;
  letter-spacing: 5px;
  @media (max-width: 450px) {
    font-size: 19px;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: #b7b7b7;
  letter-spacing: 2px;
`;

export const Post = styled.div`
  border-radius: 20px;
  background: lightblue;
  padding: 20px;
`;
export const HeadingPost = styled.h3`
  font-size: 22px;
  line-height: 1.42;
  padding-bottom: 20px;
`;

export const PostTweet = styled.div`
  background: #000;
  padding: 5px;
`;

export const PostEngagement = styled.div`
  display: flex;
  color: whitesmoke;
  gap: 30px;
  padding-top: 80px;
  @media (max-width: 900px) {
    padding-top: 50px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }
  @media (max-width: 450px) {
    padding-top: 15px;
  }
`;
export const PostEngagementContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  h5 {
    font-weight: 300;
    font-size: 12px;
    padding: 0;
    text-align: left;
  }
  .icon {
    height: 16px;
    width: 16px;
    color: #fff;
    padding-right: 10px;
    font: normal normal normal 14px/1 FontAwesome !important;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
`;
export const RightCol = styled(Col)`
  font-size: 12px;
  color: #25d366;
  font-weight: 300;
  span {
    color: #25d366;
    font-weight: 300;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  h4 {
    font-weight: 300;
  }
  @media (max-width: 450px) {
    h4 {
      font-size: 14px;
    }
  }
`;

export const TopBoard = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 25px 15px;
  border-radius: 20px;
  background: #303030;
  h3 {
    font-weight: 300;
  }
  h5 {
    font-weight: 300;
  }
  .row {
    padding: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.33);
  }
  .active {
    border: 2px solid #25d366;
  }
  @media (max-width: 500px) {
    background: none;
    padding: 25px 0px;
  }
`;
export const TopBoardCol = styled(Col)`
  align-items: center;
  display: flex;
  .num {
    width: 50px;
    background: #272727;
    border-radius: 3px;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 10px;
    padding: 5px;
    text-align: center;
  }
  img {
    margin: 0 10px;
    height: 20px;
    width: 20px;
    border-radius: 20px;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;
export const TweetCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  h4 {
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    white-space: nowrap;
  }
  p {
    font-size: 13px;
    white-spacing: wrap;
    letter-spacing: 1px;
  }
  @media (max-width: 450px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const TotalELO = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 0;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  height: 300px;
  h1 {
    font-size: 55px;
    font-weight: bold;
    letter-spacing: 8px;
  }
  h4 {
    font-size: 24px;
    color: #25d366;
    font-weight: bold;
    padding-left: 10px;
    letter-spacing: 2px;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 40px;
    }
    h4 {
      font-size: 20px;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 28px;
    }
    h4 {
      font-size: 16px;
    }
    height: 100px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  width: 100%;
  padding-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 450px) {
    gap: 10px;
    padding-bottom: 20px;
  }
`;
export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 17%;
  min-width: 160px;
  span {
    font-size: 10px;
    font-weight: 400;
    font-style: italic;
    color: #fff;
  }
  @media (max-width: 1100px) {
    width: 22%;
  }
  @media (max-width: 900px) {
    width: 20%;
  }
  @media (max-width: 600px) {
    width: 45%;
  }
  @media (max-width: 450px) {
    width: 100%;
    span {
      display: none;
    }
  }
`;

export const PostView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #303030;
  width: 100%;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  height: 140px;
  gap: 3px;
  img {
    width: 60px;
    height: 50px;
    padding-bottom: 10px;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #b7b7b7;
  }
  div {
    span {
      display: none;
      font-size: 10px;
      font-weight: 400;
      font-style: italic;
      color: #fff;
    }
  }
  @media (max-width: 450px) {
    flex-direction: row;
    justify-content: start;
    height: 80px;
    gap: 10px;
    align-items: flex-start;
    img {
      width: 40px;
      height: 50px;
      padding-bottom: 10px;
    }
    h2 {
      flex: 1;
      text-align: end;
    }
    div {
      span {
        display: block;
      }
    }
  }
`;

export const SolanaWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 50px 0;
  h2 {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
  }
  div {
    display: flex;
    gap: 10px;
    input {
      width: 60%;
      border: 2px solid #25d366;
      border-radius: 20px;
      outline: none;
      background: #1e1e1e;
      color: #fff;
      padding: 10px;
      text-indent: 10px;
      letter-spacing: 1px;
    }
    .btn {
      background: #25d366;
      color: #000;
      letter-spacing: 2px;
      font-weight: 700;
      padding: 10px 30px;
      border-radius: 10px;
      text-transform: uppercase;
    }
    @media (max-width: 450px) {
      flex-direction: column;
      input {
        width: 100%;
      }
      .btn {
        width: 130px;
        text-align: center;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  background-color: #379a5c;
  margin: 3px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 3px 6px 3px;
  gap: 16px;
  cursor: pointer;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 55px;
    background-color: #25d366;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
  }
`;

export const Profile = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  gap: 3px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
  h3 {
    font-size: 12px;
    font-weight: 300;
  }
`;
