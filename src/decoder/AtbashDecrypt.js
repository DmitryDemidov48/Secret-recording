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

const AtbashDecrypt = ({ onDecrypt }) => {
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = atbashDecipher(encryptedText);
        setDecryptedText(result);
        if (onDecrypt) {
            onDecrypt(result);
        }
    };

    const atbashDecipher = (encryptedText) => {
        return encryptedText
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
            <Title>Atbash Decryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="encryptedText">Encrypted Text:</Label>
                <Input type="text" id="encryptedText" value={encryptedText} onChange={(e) => setEncryptedText(e.target.value)} />
                <Button type="submit">Decrypt</Button>
            </Form>
            {decryptedText && (
                <div>
                    <h2>Decrypted Text:</h2>
                    <p>{decryptedText}</p>
                </div>
            )}
        </Container>
    );
};

export default AtbashDecrypt;
