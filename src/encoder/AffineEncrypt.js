import React, { useState } from 'react';
import styled from 'styled-components';

// Стили для контейнера компонента
const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #000; /* Черный фон */
  color: #fff; /* Белый текст */
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
  max-width: 300px;
  margin: 0 auto;
  background-color: #111; /* Темно-серый фон */
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333; /* Темный контур */
`;

// Стили для метки (label)
const Label = styled.label`
  margin-bottom: 10px;
  color: #fff; /* Белый текст */
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

// Функция для шифрования текста по алгоритму аффинного шифра
function affineEncrypt(text, a, b) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 1040 && char <= 1071) || (char >= 1072 && char <= 1103)) {
            const isUpperCase = char >= 65 && char <= 90 || char >= 1040 && char <= 1071;
            const charCodeBase = isUpperCase ? (isUpperCase ? 65 : 1040) : (char >= 97 && char <= 122 || char >= 1072 && char <= 1103) ? 97 : char;
            encryptedText += String.fromCharCode(((a * (char - charCodeBase) + b) % 26 + 26) % 26 + charCodeBase);
        } else {
            // Игнорируем символы, которые не поддерживаются
            encryptedText += text.charAt(i);
        }
    }
    return encryptedText;
}


const AffineEncrypt = ({ onEncrypt }) => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const result = affineEncrypt(text, parseInt(a), parseInt(b));
            setEncryptedText(result);
            if (onEncrypt) {
                onEncrypt(result);
            }
            setError(''); // Сброс ошибки, если она была установлена ранее
        } catch (err) {
            setError('An error occurred while encrypting the text.'); // Установка текста ошибки
            setEncryptedText(''); // Очистка зашифрованного текста
        }
    };

    return (
        <Container>
            <Title>Affine Encryption</Title>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображение ошибки */}
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="a">Coefficient a:</Label>
                <Input type="number" id="a" value={a} onChange={(e) => setA(e.target.value)} />
                <Label htmlFor="b">Coefficient b:</Label>
                <Input type="number" id="b" value={b} onChange={(e) => setB(e.target.value)} />
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


export default AffineEncrypt;
