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
  box-shadow: 0 0 0.5rem rgb(36, 37, 38);
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchText = styled.input`
  padding: 0 1rem;
  width: 300px;
  height: 40px;
  border-radius: 2rem;
  border: none;
  background-color: rgba(58, 59, 60);
  outline: none;
  caret-color: white;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  min-width: 400px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  min-width: 150px;
  padding: 1rem 0;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
