import styled from "styled-components";
import { Col } from "antd";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  background: #030208;
  color: #fff;
  @media (max-width: 900px) {
    height: 100%;
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
  span {
    text-align: end;
    cursor: pointer;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Refer = styled.div`
  width: 30%;
`;

export const RankedTweet = styled.div`
  width: 50%;
  text-align: center;
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
  @media (max-width: 1050px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  line-height: 1.2;
  font-weight: 300;
  @media (max-width: 450px) {
    font-size: 19px;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: whitesmoke;
  opacity: 0.7;
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
  color: pink;
  span {
    color: whitesmoke;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px 30px;
  border-radius: 20px;
  background: purple;
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
`;
export const TweetCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
