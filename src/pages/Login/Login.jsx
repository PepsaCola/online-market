import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authThunks.js';
import { selectError, selectIsLoading, selectIsLoggedIn } from '../../features/auth/selectors.js';
import {
  AccountBtn,
  BackGround,
  BackGroundWrap,
  Container,
  Description,
  FormTitle,
  Input,
  Label,
  Title,
  Form,
} from '../../components/AuthComponents/styled';
import { ForgotKeyBtn, SignInBtn } from './styled';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/shop');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
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

      <Form onSubmit={handleSubmit}>
        <FormTitle>WELCOME BACK</FormTitle>
        <Label>
          Email
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="myemail@example.com"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Label>
        <ForgotKeyBtn to="/login">Forgot Password?</ForgotKeyBtn>

        <AccountBtn type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login In'}
        </AccountBtn>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </Form>
    </Container>
  );
};
