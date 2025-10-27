import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authThunks.js';
import { selectError, selectIsLoading } from '../../features/auth/selectors.js';
import {
  AccountBtn,
  BackGround,
  BackGroundWrap,
  Container,
  Description,
  Form,
  FormTitle,
  Input,
  Label,
  Title,
} from '../../components/AuthComponents/styled';
import { ContainerForLoginRoute, ForUserDescription, RouteToLogIn } from './styled';
export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(register({ username, email, password })).unwrap();
      navigate('/shop');
    } catch (err) {
      // Помилка обробляється автоматично у Redux (authSlice.js)
    }
  };

  return (
    <Container>
      <BackGround>
        <BackGroundWrap>
          <Title>WELCOME BACK</Title>
          <Description>Enter your personal details to use all of site features</Description>
        </BackGroundWrap>
      </BackGround>

      <Form onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>
        <Label>
          Username
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="John"
            required
          />
        </Label>
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

        <AccountBtn type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Account'}
        </AccountBtn>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        <ContainerForLoginRoute>
          <ForUserDescription>Already have an account?</ForUserDescription>
          <RouteToLogIn to="/login">Log In</RouteToLogIn>
        </ContainerForLoginRoute>
      </Form>
    </Container>
  );
};
