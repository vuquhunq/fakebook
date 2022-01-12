import React from "react";
import {
  FormWrapper,
  InputWrapper,
  AuthHeader,
  AuthWrapper,
  TextInput,
  Button,
} from "./styled";
export default function Register({ closeRegister }) {
  return (
    <AuthWrapper>
      <FormWrapper>
        <AuthHeader>
          <h3>Đăng ký</h3>
          <label>Nhanh chóng và dễ dàng</label>
        </AuthHeader>
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
        <Button onClick={closeRegister}>Trở lại</Button>
      </FormWrapper>
    </AuthWrapper>
  );
}
