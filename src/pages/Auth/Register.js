import React from "react";
import styled from "styled-components";

const RegisterWrapper = styled.div`
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
    justify-content: center;
    align-items: center;
    padding: 0 1rem 1rem 1rem;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  background-color: white;
`;
const RegisterHeader = styled.div`
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
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  justify-content: space-evenly;
  gap: 1rem;
`;
const TextInput = styled.input`
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
  background-color: ${(props) => (props.muted ? "rgb(245,246,247);" : "white;")}
  border: 1px rgb(205,208,212) solid;
  border-radius: .3rem;
`;
const Button = styled.button`
  padding: 0.5rem 4rem;
  font-weight: bolder;
  font-size: 1rem;
  color: white;
  background-color: rgb(73, 161, 46);
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;
export default function Register() {
  return (
    <RegisterWrapper>
      <FormWrapper>
        <RegisterHeader>
          <h3>Đăng ký</h3>
          <label>Nhanh chóng và dễ dàng</label>
        </RegisterHeader>
        <form>
          <InputWrapper>
            <TextInput type="text" placeholder="Họ" muted />
            <TextInput type="text" placeholder="Tên" muted />
          </InputWrapper>
          <InputWrapper>
            <TextInput type="email" placeholder="Số di động hoặc email" muted />
          </InputWrapper>
          <InputWrapper>
            <TextInput type="password" placeholder="Mật khẩu mới" />
          </InputWrapper>
          <InputWrapper></InputWrapper>
          <Button>Đăng ký</Button>
        </form>
      </FormWrapper>
    </RegisterWrapper>
  );
}
