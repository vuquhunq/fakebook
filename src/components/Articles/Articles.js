import React from "react";
import { ArticleContent, ArticleImage, ArticleList, CommentList, UserInfo } from "./styled";

export default function Articles() {
  return (
    <>
      <ArticleList>
        <UserInfo>
          <img
            src="https://picsum.photos/200/1"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
            }}
            alt="Ảnh đại diện"
          />
          <h4>Quang Hưng</h4>
        </UserInfo>
        <ArticleContent>nội dung trong này</ArticleContent>
        <ArticleImage>
          <img
            src="https://picsum.photos/400/2"
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Ảnh đại diện"
          />
        </ArticleImage>
        <CommentList>comments</CommentList>
      </ArticleList>
    </>
  );
}
