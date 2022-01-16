import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  transition: 0.2s background-color;
  gap: 8px;
  &:hover {
    background-color: rgba(58, 59, 60);
  }
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
export default function UserList({ users }) {
  console.log(users);
  return (
    <Link to={`/profile/${users.user_id}`}>
      <UserWrapper>
        <img
          src={`https://picsum.photos/${users.user_id}`}
          alt="Ảnh đại diện"
        />
        <div>{users.user_name}</div>
      </UserWrapper>
    </Link>
  );
}
