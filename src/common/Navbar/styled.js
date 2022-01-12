import styled from "styled-components";
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  z-index: 9;
  top: 0;
  background-color: rgb(36, 37, 38);
  box-shadow: 0 0 1rem rgb(36, 37, 38);
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  min-width: 150px;
  margin-right: 0.5rem;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-item: center;
  width: 20%;
  height: 40px;
  margin-left: 0.5rem;
`;
export const SearchText = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-width: 180px;
  height: 40px;
  border-radius: 2rem;
  border: none;
  background-color: rgba(58, 59, 60);
  outline: none;
  caret-color: white;
  color: white;
  transition: display 0.2;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
  @media (max-width: 940px) {
    display: none;
  }
`;
export const SearchButton = styled.button`
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 40px;
  @media (min-width: 940px) {
    display: none;
  }
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;
`;
