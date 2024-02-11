import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  background-color: #111; /* Темно-серый фон */
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333; /* Бордер */
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00cc00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #00aa00;
  }
`;

const LoginPage = () => {
    return (
        <Container>
            <Title>Login</Title>
            <LoginForm>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </LoginForm>
        </Container>
    );
};

export default LoginPage;
