import React from 'react';
import styled from 'styled-components';
import CaesarCipher from "../encoder/CaesarEncrypt";
import VigenereCipher from "../encoder/VigenereEncrypt";
import AffineCipher from "../encoder/AffineEncrypt";
import EncryptContainer from "../components/EncryptContainer";

const Container = styled.div`
  padding: 20px;
  text-align: center; /* Выравнивание по центру */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ccc; /* Добавление бордера */
  padding: 20px;
`;

const Home = () => {
    return (
        <Container>
            <Title>Welcome to SecretScribe!</Title>
            <Description>
                SecretScribe - это приложение, которое позволяет вам шифровать и дешифровать тексты с помощью различных методов шифрования, таких как Шифр Цезаря, Виженера и другие. Вы можете выбрать нужный метод шифрования, ввести текст и увидеть его зашифрованную версию. Приложение также позволяет вам регистрироваться, входить в систему и сохранять ваши предпочтения. Наслаждайтесь безопасностью и удобством шифрования с HackerCipher!
            </Description>
        </Container>
    );
};

export default Home;
