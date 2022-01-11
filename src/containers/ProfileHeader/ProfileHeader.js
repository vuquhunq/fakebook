import React from "react";
import { ButtonWrapper, NavWrapper } from "../../common/Navbar/styled";
import {
  AvatarImage,
  Button,
  CoverImage,
  CoverWrapper,
  DetailUserWrapper,
  DetailWrapper,
  HeaderWrapper,
  ImageWrapper,
  InfoWrapper,
  ProfileWrapper,
} from "./styled";

export default function ProfileHeader() {
  return (
    <>
      <ProfileWrapper>
        <HeaderWrapper>
          <CoverWrapper>
            <CoverImage src="https://picsum.photos/940/320" alt="Ảnh bìa" />
          </CoverWrapper>
          <DetailWrapper>
            <DetailUserWrapper>
              <ImageWrapper>
                <AvatarImage
                  src="https://picsum.photos/200/1"
                  alt="Ảnh đại diện"
                />
              </ImageWrapper>
              <InfoWrapper>
                <h1>Quang Hưng</h1>
                <h5>16 bạn bè</h5>
              </InfoWrapper>
            </DetailUserWrapper>
            <ButtonWrapper>
              <Button primary>Thêm vào tin</Button>
              <Button>Chỉnh sửa trang cá nhân</Button>
            </ButtonWrapper>
          </DetailWrapper>
          <NavWrapper>
            <h3>Để ý chỗ này nè nhóc ác</h3>
          </NavWrapper>
        </HeaderWrapper>
      </ProfileWrapper>
    </>
  );
}
