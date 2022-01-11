import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 400px;
  & form {
      width: 100%;
      text-align: center;
  }
  
  }
`;
const Input = styled.input`
  width: 300px;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: none;
  border-radius: 0.5rem;
  border: none;
  margin-top: ${(props) => (props.login ? "1rem;" : ".5rem;")};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;
export default function Login() {
  return (
    <LoginWrapper>
      <LoginForm>
        <h1>Đăng nhập</h1>
        <Input type="text" placeholder="Tên đăng nhập" />
        <Input type="password" placeholder="Mật khẩu" />
        <Input type="submit" value="Đăng nhập" login />
      </LoginForm>
    </LoginWrapper>
  );
}
