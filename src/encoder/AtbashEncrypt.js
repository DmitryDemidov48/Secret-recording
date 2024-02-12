import React, { useState } from 'react';
import styled from 'styled-components';

// Стили для контейнера компонента
const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #111; /* Темно-серый фон */
  color: #fff; /* Белый текст */
  border-radius: 10px;
  border: 1px solid #333; /* Темный контур */
  max-width: 300px;
  margin: 0 auto;
`;

// Стили для заголовка
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Стили для формы
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Стили для метки (label)
const Label = styled.label`
  margin-bottom: 10px;
`;

// Стили для ввода (input)
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc; /* Светлый контур */
  border-radius: 5px;
`;

// Стили для кнопки
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00ff00; /* Зеленый фон */
  color: #000; /* Черный текст */
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #00cc00; /* Темно-зеленый фон при наведении */
  }
`;

// Стили для контейнера с результатом
const ResultContainer = styled.div`
  background-color: #111;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333;
  margin-top: 20px; /* Добавляем отступ сверху */
`;

// Стили для текста результата
const ResultText = styled.p`
  font-size: 16px;
  color: #fff;
`;

const AtbashEncrypt = ({ onEncrypt }) => {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = atbashCipher(text);
        setEncryptedText(result);
        if (onEncrypt) {
            onEncrypt(result);
        }
    };

    const atbashCipher = (text) => {
        return text
            .split('')
            .map((char) => {
                const code = char.charCodeAt();
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    return String.fromCharCode(219 - code);
                }
                return char;
            })
            .join('');
    };

    return (
        <Container>
            <Title>Atbash Encryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="text">Text:</Label>
                <Input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                <Button type="submit">Encrypt</Button>
            </Form>
            {encryptedText && (
                <ResultContainer>
                    <h2>Encrypted Text:</h2>
                    <ResultText>{encryptedText}</ResultText>
                </ResultContainer>
            )}
        </Container>
    );
};

export default AtbashEncrypt;
