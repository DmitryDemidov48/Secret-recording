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

// Функция для шифрования текста по шифру Морзе
function morseCode(text) {
    // Алфавит Морзе
    const morseAlphabet = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
        ' ': ' ' // Пробел
    };

    text = text.toLowerCase();
    let result = '';

    // Проходим по каждому символу в тексте
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (morseAlphabet[char]) {
            // Если символ присутствует в алфавите Морзе, добавляем его код и пробел после
            result += morseAlphabet[char] + ' ';
        } else {
            // Игнорируем символы, которые не входят в алфавит Морзе
        }
    }

    return result;
}

const MorseCipherEncrypt = ({ onEncrypt }) => {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    // Обработка отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        const result = morseCode(text);
        setEncryptedText(result);
        if (onEncrypt) {
            onEncrypt(result);
        }
    };

    return (
        <Container>
            <Title>Morse Cipher Encrypt</Title>
            {/* Форма для ввода текста */}
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="text">Text:</Label>
                <Input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                <Button type="submit">Encrypt</Button>
            </Form>
            {/* Отображение зашифрованного текста */}
            {encryptedText && (
                <ResultContainer>
                    <h2>Encrypted Text:</h2>
                    <ResultText>{encryptedText}</ResultText>
                </ResultContainer>
            )}
        </Container>
    );
};

export default MorseCipherEncrypt;
