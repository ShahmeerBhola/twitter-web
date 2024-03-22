import styled from "styled-components";
import { Col } from "antd";

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  background: #030208;
  color: #fff;
  @media (max-width: 800px) {
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 20px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  width: 100%;
  img {
    border-radius: 40px;
  }
  h3 {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;
  }
  span {
    text-align: end;
    cursor: pointer;
    width: 100%;
  }
`;

export const Container = styled.div`
  flex: 1;
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
  justify-content: end;
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
    letter-spacing: 5px;
    text-align: center;
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
  font-weight: bold;
  letter-spacing: 10px;
  @media (max-width: 450px) {
    font-size: 19px;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: whitesmoke;
  opacity: 0.7;
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
  color: #fff;
  letter-spacing: 3px;
  font-weight: 300;
  span {
    color: whitesmoke;
    letter-spacing: 3px;
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
  background: #1e1e1e;
  border: 2px solid #25d366;
  h3 {
    font-weight: 300;
  }
  h5 {
    font-weight: 300;
  }
`;
export const TopBoardCol = styled(Col)`
  align-items: center;
  display: flex;
  img {
    margin: 0 10px;
    height: 30px;
    width: 30px;
    border-radius: 20px;
  }
  span {
    letter-spacing: 3px;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  h1 {
    font-size: 55px;
    font-weight: bold;
    letter-spacing: 8px;
  }
  h4 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 8px;
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
  }
`;

export const PostContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
export const PostDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 17%;
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 3px;
  }
  span {
    font-size: 10px;
    font-weight: 400;
    font-style: italic;
    color: #fff;
  }
  @media (max-width: 1100px) {
    width: 23%;
  }
  @media (max-width: 900px) {
    width: 21%;
  }
  @media (max-width: 600px) {
    width: 45%;
  }
`;

export const PostView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid #25d366;
  background: #31E1E1E;
  width: 100%;
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
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
      input{
        width: 100%;
      }
      .btn{
        width: 130px;
        text-align: center;
      }
    }
  }
`;
