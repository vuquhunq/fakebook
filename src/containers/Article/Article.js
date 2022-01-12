import React, { useState } from "react";
import Articles from "../../components/Articles/Articles";
import Create from "../../components/Create/Create";
import {
  ArticleCreate,
  ArticleWrapper,
  Button,
  ContentWrapper,
  CreateButton,
  StaticFileWrapper,
} from "./styled";

export default function Article() {
  const [isCreate, setIsCreate] = useState(false);
  const closeCreate = () => {
    setIsCreate(!isCreate);
  };
  return (
    <>
      {isCreate ? <Create closeCreate={closeCreate} /> : <></>}
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
            <CreateButton onClick={closeCreate}>
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
