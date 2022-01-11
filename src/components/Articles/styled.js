import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 1rem 0 1rem;
  border-bottom: 1px rgb(38, 39, 40) solid;
  & img {
    width: 40px;
    height: 40px;
  }
  & h4 {
    margin: 1rem 0.5rem;
  }
`;
export const ArticleImage = styled.div`
  width: 100%;
  height: 400px;
`;
export const CommentList = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
  flex-direction: column;
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.home ? "600px" : "530px")};
  height: auto;
  border-radius: 0.5rem;
  background-color: rgb(38, 39, 40);
  margin: 1rem 0;
  padding: 0;
  color: white;
`;
export const ArticleContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem 1rem 1rem;
`;
