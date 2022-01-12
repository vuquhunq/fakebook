import styled from "styled-components";

export const CreateWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const ContentWrapper = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  background-color: rgb(38, 39, 40);
  border-radius: 0.5rem;
  position: relative;
`;
export const CreateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px rgb(245, 256, 247) solid;
  & div {
    position: absolute;
    right: 1rem;
  }
`;
export const UserCreate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 72px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  caret-color: white;
  color: white;
  text-decoration: none;
  & input {
    background: none;
    border: none;
    outline: none;
    padding: 0 16px 40px;
    font-size: 1.5rem;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
    :-ms-input-placeholder {
      color: white;
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
