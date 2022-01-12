import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../../pages/Auth/styled";
import { UserInfo } from "../Articles/styled";
import {
  ButtonWrapper,
  ContentWrapper,
  CreateHeader,
  CreateWrapper,
  InputWrapper,
} from "./styled";
export default function Create({ closeCreate }) {
  return (
    <CreateWrapper>
      <ContentWrapper>
        <CreateHeader>
          <h3>Tạo bài viết</h3>
          <div>
            <FontAwesomeIcon icon={faWindowClose} onClick={closeCreate} />
          </div>
        </CreateHeader>
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
        <InputWrapper>
          <input type="text" placeholder="Bạn đang nghĩ gì?" />
          <input type="file" />
          <ButtonWrapper>
            <Button>Đăng</Button>
          </ButtonWrapper>
        </InputWrapper>
      </ContentWrapper>
    </CreateWrapper>
  );
}
