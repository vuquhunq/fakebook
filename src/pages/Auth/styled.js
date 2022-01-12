import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: black;
  & form {
    display: flex;
    flex-direction: column;
    border-top: 1px rgb(38, 39, 40) solid;
    border-bottom: 1x rgb(38,38,40) solid;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 1rem 1rem;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  background-color: white;
`;
export const AuthHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 0 1rem;
  border-bottom: 1px;
  padding-bottom: 1rem;
  & h3,
  label {
    margin: 0;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  justify-content: space-evenly;
  gap: 1rem;
`;
export const TextInput = styled.input`
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
  background-color: ${(props) => (props.muted ? "rgb(245,246,247);" : "white;")}
  border: 1px rgb(205,208,212) solid;
  border-radius: .3rem;
`;
export const Button = styled.button`
  padding: 0.5rem 4rem;
  font-weight: bolder;
  font-size: 1rem;
  color: white;
  background-color: rgb(73, 161, 46);
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;
