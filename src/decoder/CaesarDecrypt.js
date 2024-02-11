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

// Функция для расшифровки текста по шифру Цезаря
const caesarDecipher = (text, shift) => {
    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt();
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                let shiftedCode = code - shift;
                // Проверяем, чтобы символы оставались в пределах диапазона ASCII кодов для букв
                if ((code >= 65 && code <= 90 && shiftedCode < 65) || (code >= 97 && code <= 122 && shiftedCode < 97)) {
                    shiftedCode += 26;
                }
                return String.fromCharCode(shiftedCode);
            }
            return char;
        })
        .join('');
};

const CaesarDecrypt = ({ onDecrypt }) => {
    // Состояния для сдвига, введенного текста и расшифрованного текста
    const [shift, setShift] = useState('');
    const [text, setText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    // Функция для обработки отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        const result = caesarDecipher(text, parseInt(shift));
        setDecryptedText(result);
        if (onDecrypt) {
            onDecrypt(result);
        }
    };

    return (
        <Container>
            <Title>Caesar Cipher Decryption</Title>
            {/* Форма для ввода текста */}
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="shift">Shift:</Label>
                <Input type="number" id="shift" value={shift} onChange={(e) => setShift(e.target.value)} />
                <Label htmlFor="text">Text:</Label>
                <Input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                <Button type="submit">Decrypt</Button>
            </Form>
            {/* Отображение расшифрованного текста */}
            {decryptedText && (
                <ResultContainer>
                    <h2>Decrypted Text:</h2>
                    <ResultText>{decryptedText}</ResultText>
                </ResultContainer>
            )}
        </Container>
    );
};

export default CaesarDecrypt;
