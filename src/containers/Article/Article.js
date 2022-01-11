import React from "react";
import Articles from "../../components/Articles/Articles";
import {
    ArticleCreate, ArticleWrapper,
    Button,
    ContentWrapper,
    CreateButton,
    StaticFileWrapper
} from "./styled";

export default function Article() {
  return (
    <>
      <ArticleWrapper>
        <ArticleCreate>
          <ContentWrapper>
            <img
              src="https://picsum.photos/200/1"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
              }}
              alt="Ảnh đại diện"
            />
            <CreateButton onClick={()=>console.log("Hello World")}>
              Bạn đang nghĩ gì?
            </CreateButton>
          </ContentWrapper>
          <StaticFileWrapper>
            <Button>Video trực tiếp</Button>
            <Button>Ảnh/Video</Button>
            <Button>Sự kiện trong đời</Button>
          </StaticFileWrapper>
        </ArticleCreate>
            <Articles />
      </ArticleWrapper>
    </>
  );
}
