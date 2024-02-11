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

// Функция для алфавита
function alphabet() {
    return {
        'a': 'AAAAA', 'b': 'AAAAB', 'c': 'AAABA', 'd': 'AAABB', 'e': 'AABAA',
        'f': 'AABAB', 'g': 'AABBA', 'h': 'AABBB', 'i': 'ABAAA', 'j': 'ABAAB',
        'k': 'ABABA', 'l': 'ABABB', 'm': 'ABBAA', 'n': 'ABBAB', 'o': 'ABBBA',
        'p': 'ABBBB', 'q': 'BAAAA', 'r': 'BAAAB', 's': 'BAABA', 't': 'BAABB',
        'u': 'BABAA', 'v': 'BABAB', 'w': 'BABBA', 'x': 'BABBB', 'y': 'BBAAA',
        'z': 'BBAAB'
    };
}

// Функция для шифрования текста по шифру Бэкона
function baconEncrypt(text) {
    const alphabetMap = alphabet();
    text = text.toLowerCase();
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            result += ' ';
        } else if (alphabetMap[char]) {
            result += alphabetMap[char];
        } else {
            // Ignore characters not in the alphabet
        }
    }

    return result;
}

const BaconEncrypt = ({ onEncrypt }) => {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = baconEncrypt(text);
        setEncryptedText(result);
        if (onEncrypt) {
            onEncrypt(result);
        }
    };

    return (
        <Container>
            <Title>Bacon Cipher Encryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="text">Text:</Label>
                <Input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                <Button type="submit">Encrypt</Button>
            </Form>
            {encryptedText && (
                <div>
                    <h2>Encrypted Text:</h2>
                    <p>{encryptedText}</p>
                </div>
            )}
        </Container>
    );
};

export default BaconEncrypt;
