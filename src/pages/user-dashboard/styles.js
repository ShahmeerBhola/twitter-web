import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  background: whitesmoke;
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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const TweetCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
