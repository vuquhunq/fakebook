import React from "react";
import styled from "styled-components";
import Navbar from "../../common/Navbar/Navbar";
import Article from "../../containers/Article/Article";

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Home() {
  return (
    <>
      <Navbar />
      <ArticleWrapper>
        <Article />
      </ArticleWrapper>
    </>
  );
}
