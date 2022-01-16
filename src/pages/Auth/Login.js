import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { accessToken } from "../../config/config";
import { authService } from "../../services/AuthService";
import Register from "./Register";
import {
  AuthHeader,
  AuthWrapper,
  Button,
  FormWrapper,
  InputWrapper,
  TextInput,
} from "./styled";

export default function Login() {
  const [isRegister, setisRegister] = useState(false);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const history = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    authService.login(username, password);
  };
  if (accessToken) {
    history("/home");
  }

  return (
    <>
      <AuthWrapper>
        <FormWrapper>
          <AuthHeader>
            <h3>Đăng nhập</h3>
          </AuthHeader>
          <form onSubmit={Login}>
            <InputWrapper>
              <TextInput
                type="text"
                placeholder="Số di động hoặc email"
                ref={usernameInput}
                muted
              />
            </InputWrapper>
            <InputWrapper>
              <TextInput
                type="password"
                placeholder="Mật khẩu"
                ref={passwordInput}
              />
            </InputWrapper>
            <InputWrapper>
              <Button>Đăng nhập</Button>
            </InputWrapper>
          </form>
          <Button onClick={() => setisRegister(true)}>Đăng ký</Button>
        </FormWrapper>
      </AuthWrapper>
      {isRegister ? (
        <Register closeRegister={() => setisRegister(!isRegister)} />
      ) : (
        <></>
      )}
    </>
  );
}
