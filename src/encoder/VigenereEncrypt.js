import React, { useState } from 'react';
import styled from 'styled-components';

// Общие стили для контейнера компонента
const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #000; /* Черный фон */
  color: #fff; /* Белый текст */
`;

// Общие стили для заголовка
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Общие стили для формы
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

// Общие стили для метки (label)
const Label = styled.label`
  margin-bottom: 10px;
  color: #fff; /* Белый текст */
`;

// Общие стили для ввода (input)
const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc; /* Светлый контур */
  border-radius: 5px;
`;

// Общие стили для текстовой области (textarea)
const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc; /* Светлый контур */
  border-radius: 5px;
`;

// Общие стили для кнопки
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

// Функция для шифрования текста по алгоритму шифра Виженера
function vigenereEncrypt(text, keyword) {
    let result = '';
    const keyLength = keyword.length;
    let keywordIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charCode = text.charCodeAt(i);
        const isUpperCase = charCode >= 65 && charCode <= 90;
        const isLowerCase = charCode >= 97 && charCode <= 122;

        if (isUpperCase || isLowerCase) {
            const keywordCharCode = keyword[keywordIndex % keyLength].toUpperCase().charCodeAt(0) - 65;
            const shift = keywordCharCode;

            let shiftedCharCode = charCode + shift;

            if (isUpperCase && (shiftedCharCode > 90 || shiftedCharCode < 65)) {
                shiftedCharCode -= 26;
            } else if (isLowerCase && (shiftedCharCode > 122 || shiftedCharCode < 97)) {
                shiftedCharCode -= 26;
            }

            result += String.fromCharCode(shiftedCharCode);

            keywordIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

const VigenereEncrypt = ({ onEncrypt }) => {
    const [keyword, setKeyword] = useState('');
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = vigenereEncrypt(text, keyword);
        setEncryptedText(result);
        if (onEncrypt) {
            onEncrypt(result);
        }
    };

    return (
        <Container>
            <Title>Vigenere Encryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="keyword">Keyword:</Label>
                <Input type="text" id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <Label htmlFor="text">Text:</Label>
                <TextArea id="text" value={text} onChange={(e) => setText(e.target.value)} />
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

export default VigenereEncrypt;
