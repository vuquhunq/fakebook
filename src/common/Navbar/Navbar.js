import {
  faAngleDown,
  faHome,
  faSearch,
  faUserFriends,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  NavBar,
  NavWrapper,
  ProfileWrapper,
  SearchButton,
  SearchText,
  SearchWrapper,
} from "./styled";
export default function Navbar() {
  return (
    <NavBar>
      <SearchWrapper>
        <SearchText type="text" placeholder="Tìm kiếm trên Fakebook" />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchWrapper>
      <NavWrapper>
        <Link to="/home" style={{ color: "white" }}>
          <div>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </div>
        </Link>
        <FontAwesomeIcon icon={faUserFriends} size="lg" />
        <FontAwesomeIcon icon={faVideo} size="lg" />
      </NavWrapper>
      <ButtonWrapper>
        <Link to="/profile">
          <ProfileWrapper>
            <img src="https://picsum.photos/40" alt="Ảnh đại diện" />
            <h5>Quang Hưng</h5>
          </ProfileWrapper>
        </Link>
        <FontAwesomeIcon icon={faAngleDown} size="lg" />
      </ButtonWrapper>
    </NavBar>
  );
}
