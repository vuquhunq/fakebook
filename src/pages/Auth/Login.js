import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import {
  AuthHeader,
  AuthWrapper,
  FormWrapper,
  InputWrapper,
  TextInput,
  Button,
} from "./styled";

export default function Login() {
  const [isRegister, setisRegister] = useState(false);
  return (
    <>
      <AuthWrapper>
        <FormWrapper>
          <AuthHeader>
            <h3>Đăng nhập</h3>
          </AuthHeader>
          <form>
            <InputWrapper>
              <TextInput
                type="email"
                placeholder="Số di động hoặc email"
                muted
              />
            </InputWrapper>
            <InputWrapper>
              <TextInput type="password" placeholder="Mật khẩu" />
            </InputWrapper>
            <InputWrapper></InputWrapper>
            <Link to="/home">
              <Button>Đăng nhập</Button>
            </Link>
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
