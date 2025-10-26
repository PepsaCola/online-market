import React from 'react';
import {
  BackGround,
  Container,
  BackGroundWrap,
  Form,
  Title,
  Description,
  FormTitle,
  Label,
  Input,
  AccountBtn,
  SignInBtn,
  ForgotKeyBtn,
} from './styled';

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked');
  };

  return (
    <Container>
      <BackGround>
        <BackGroundWrap>
          <Title>HELLO, FRIEND</Title>
          <Description>Register with your personal details to use all of site features</Description>
          <SignInBtn to="/sign-up">Sign in</SignInBtn>
        </BackGroundWrap>
      </BackGround>
      <Form>
        <FormTitle>WELCOME BACK</FormTitle>
        <Label>
          Email
          <Input placeholder={'myemail@example.com'} />
        </Label>
        <Label>
          Password
          <Input placeholder={'Enter your password'} />
        </Label>
        <ForgotKeyBtn to="/login">Forgot Password?</ForgotKeyBtn>
        <AccountBtn onClick={handleSubmit}>Login In</AccountBtn>
      </Form>
    </Container>
  );
};
