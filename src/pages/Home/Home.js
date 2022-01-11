import React from "react";
import styled from "styled-components";
import Navbar from "../../common/Navbar/Navbar";
import Articles from "../../components/Articles/Articles";

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
        <Articles home />
      </ArticleWrapper>
    </>
  );
}
