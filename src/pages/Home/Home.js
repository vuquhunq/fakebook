import React from "react";
import styled from "styled-components";
import Navbar from "../../common/Navbar/Navbar";
import { accessToken } from "../../config/config";
import Article from "../../containers/Article/Article";

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Home({ userDetail }) {
  if (!accessToken) {
    return (
      <div
        style={{
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404</h1>
      </div>
    );
  } else
    return (
      <>
        <Navbar userDetail={userDetail} />
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
      </>
    );
}
