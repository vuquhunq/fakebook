import {
  faAngleDown,
  faHome,
  faSearch,
  faUserFriends,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "../../containers/User/User";
import { authService } from "../../services/AuthService";
import {
  ButtonWrapper,
  DropMenu,
  NavBar,
  NavWrapper,
  ProfileWrapper,
  SearchButton,
  SearchText,
  SearchWrapper,
  UserDropdown,
} from "./styled";
export default function Navbar({ userDetail }) {
  const Logout = () => {
    authService.logout();
    window.location = "/";
  };

  const [isDropMenu, setIsDropMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <NavBar>
      <SearchWrapper>
        <SearchText
          onClick={() => setIsSearch(!isSearch)}
          type="text"
          placeholder="Tìm kiếm trên Fakebook"
        />
        <SearchButton onClick={() => setIsSearch(!isSearch)}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
        {isSearch ? (
          <UserDropdown>
            <User closeSearch={() => setIsSearch(!isSearch)} />
          </UserDropdown>
        ) : (
          <></>
        )}
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
        <Link to={`/profile/${userDetail.user_id}`}>
          <ProfileWrapper>
            <img src="https://picsum.photos/40" alt="Ảnh đại diện" />
            <h5>{userDetail.public_name}</h5>
          </ProfileWrapper>
        </Link>
        <button onClick={() => setIsDropMenu(!isDropMenu)}>
          <FontAwesomeIcon icon={faAngleDown} size="lg" />
        </button>
        <DropMenu>
          {isDropMenu ? (
            <button
              onClick={() => {
                Logout();
                setIsDropMenu(!isEditable);
              }}
            >
              Logout
            </button>
          ) : (
            <></>
          )}
        </DropMenu>
      </ButtonWrapper>
    </NavBar>
  );
}
