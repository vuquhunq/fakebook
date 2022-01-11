import {
  faAngleDown,
  faHome,
  faUserFriends,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonWrapper, NavBar, NavWrapper, SearchText } from "./styled";

export default function Navbar() {
  return (
    <NavBar>
      <SearchText type="text" placeholder="Tìm kiếm trên Fakebook" />
      <NavWrapper>
        <FontAwesomeIcon icon={faHome} size="lg" />
        <FontAwesomeIcon icon={faUserFriends} size="lg" />
        <FontAwesomeIcon icon={faVideo} size="lg" />
      </NavWrapper>
      <ButtonWrapper>
        <img src="https://picsum.photos/40" alt="Ảnh đại diện" />
        <h5>Quang Hưng</h5>
        <FontAwesomeIcon icon={faAngleDown} size="lg" />
      </ButtonWrapper>
    </NavBar>
  );
}
