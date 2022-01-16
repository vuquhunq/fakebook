import React from "react";
import {
  AvatarImage,
  Button,
  ButtonWrapper,
  CoverImage,
  CoverWrapper,
  DetailUserWrapper,
  DetailWrapper,
  HeaderWrapper,
  ImageWrapper,
  InfoWrapper,
  ProfileWrapper,
} from "./styled";

export default function ProfileHeader({ userDetail }) {
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
                <h1>{userDetail.public_name}</h1>
                <h5>16 bạn bè</h5>
              </InfoWrapper>
            </DetailUserWrapper>
            <ButtonWrapper>
              <Button primary>Thêm vào tin</Button>
              <Button>Chỉnh sửa trang cá nhân</Button>
            </ButtonWrapper>
          </DetailWrapper>
        </HeaderWrapper>
      </ProfileWrapper>
    </>
  );
}
