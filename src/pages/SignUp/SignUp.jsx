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
  ForUserDescription,
  RouteToLogIn,
  ContainerForLoginRoute,
} from './styled';

export const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked');
  };

  return (
    <Container>
      <BackGround>
        <BackGroundWrap>
          <Title>WELCOME BACK</Title>
          <Description>Enter your personal details to use all of site features</Description>
        </BackGroundWrap>
      </BackGround>
      <Form>
        <FormTitle>Sign Up</FormTitle>
        <Label>
          First Name
          <Input placeholder={'John'} />
        </Label>
        <Label>
          Last Name
          <Input placeholder={'Smith'} />
        </Label>
        <Label>
          Email
          <Input placeholder={'myemail@example.com'} />
        </Label>
        <Label>
          Password
          <Input placeholder={'Enter your password'} />
        </Label>
        <AccountBtn onClick={handleSubmit}>Create Account</AccountBtn>
        <ContainerForLoginRoute>
          <ForUserDescription>Already have an account?</ForUserDescription>
          <RouteToLogIn to="/login">Log In</RouteToLogIn>
        </ContainerForLoginRoute>
      </Form>
    </Container>
  );
};
