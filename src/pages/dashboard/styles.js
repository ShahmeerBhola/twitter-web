import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    text-align: end;
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 700px;
  .ant-form-item {
    width: 400px;
  }
`;

export const TableWrapper = styled.div``;
