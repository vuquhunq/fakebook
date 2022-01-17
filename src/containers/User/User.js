import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserList from "../../components/UserList";
import { userService } from "../../services/UserService";

const SearchWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: rgb(36, 37, 38);
  box-shadow: 0 0 1rem rgb(26, 27, 28);
  border-radius: 0 0 0.5rem 0.5rem;
  left: 0;
  top: 0;
  flex-direction: column;
  width: 320px;
  padding: 0.5rem;
`;
const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%:
  height: 60px;
  padding-bottom: .5rem;
  gap: 0 .5rem; 
  & button {
      min-width: 40px;
      min-height: 40px;
      background: none;
      border: none;
      outline: none;
      border-radius: 50%;
      color: white;
  }
  & input {
    width: 100%; 
    height: 40px;
    padding: 0 1rem;
    border: none;
    outline: none;
    border-radius: 2rem;
    background-color: rgb(58,59,60);
    color: white;
    &:focus {
       
    }
  }

`;
export default function User({ closeSearch }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [filterUser, setfilterUser] = useState([]);
  const [UserText, setUserText] = useState();
  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    userService
      .getAllUser()
      .then((res) => setUsers(res.data.user))
      .catch((err) => alert(err));
  }, []);
  useEffect(() => {
    setfilterUser(
      users.filter((e) => {
        if (textSearch === "") {
          return null;
        }
        if (textSearch === e.user_name) {
          setUserText(e.user_id);
          return e.user_name
            .toLowerCase()
            .includes(textSearch.toLocaleLowerCase());
        }
        return e.user_name
          .toLowerCase()
          .includes(textSearch.toLocaleLowerCase());
      })
    );
  }, [textSearch, users]);
  return (
    <SearchWrapper>
      <InputSearch>
        <button onClick={closeSearch}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm trên fakebook"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!filterUser) {
                return;
              }
              else navigate(`/profile/${UserText}`);
            }
          }}
        />
      </InputSearch>
      {filterUser ? (
        filterUser.map((users) => (
          <UserList key={users.user_id} users={users} />
        ))
      ) : (
        <></>
      )}
    </SearchWrapper>
  );
}
