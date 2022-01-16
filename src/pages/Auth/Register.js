import React, { useRef } from "react";
import { authService } from "../../services/AuthService";
import {
  FormWrapper,
  InputWrapper,
  AuthHeader,
  AuthWrapper,
  TextInput,
  Button,
} from "./styled";
export default function Register({ closeRegister }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const registerAuth = () => {
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const public_name =
      firstnameInput.current.value + " " + lastnameInput.current.value;
    const phone = phoneInput.current.value;
    const email = emailInput.current.value;
    console.log(
      "usernamme: " + username,
      "password: " + password,
      "publicname: " + public_name,
      "phone: " + phone,
      "email: " + email
    );
    authService.register(username, password, public_name, phone, email);
  };
  return (
    <AuthWrapper>
      <FormWrapper>
        <AuthHeader>
          <h3>Đăng ký</h3>
          <label>Nhanh chóng và dễ dàng</label>
        </AuthHeader>
        <form>
          <InputWrapper>
            <TextInput
              type="text"
              ref={firstnameInput}
              placeholder="Họ"
              muted
            />
            <TextInput
              type="text"
              ref={lastnameInput}
              placeholder="Tên"
              muted
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type="text"
              ref={usernameInput}
              placeholder="Tên tài khoản"
              muted
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type="password"
              ref={passwordInput}
              placeholder="Mật khẩu mới"
              muted
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type="text"
              ref={phoneInput}
              placeholder="Số di động"
              muted
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              type="email"
              ref={emailInput}
              placeholder="Email"
              muted
            />
          </InputWrapper>

          <InputWrapper>
            <Button onClick={registerAuth}>Đăng ký</Button>
          </InputWrapper>
        </form>

        <Button onClick={closeRegister}>Trở lại</Button>
      </FormWrapper>
    </AuthWrapper>
  );
}
