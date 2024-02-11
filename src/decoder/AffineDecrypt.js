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

// Функция для расшифровки текста по алгоритму аффинного шифра
function vigenereDecipher(encryptedText, keyword) {
    let result = '';
    const keyLength = keyword.length;
    let keywordIndex = 0;

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i];
        const charCode = encryptedText.charCodeAt(i);
        const isUpperCase = charCode >= 65 && charCode <= 90;
        const isLowerCase = charCode >= 97 && charCode <= 122;

        if (isUpperCase || isLowerCase) {
            const keywordCharCode = keyword[keywordIndex % keyLength].toUpperCase().charCodeAt(0) - 65;
            const shift = keywordCharCode;

            let shiftedCharCode = charCode - shift;

            if (isUpperCase && (shiftedCharCode > 90 || shiftedCharCode < 65)) {
                shiftedCharCode += 26;
            } else if (isLowerCase && (shiftedCharCode > 122 || shiftedCharCode < 97)) {
                shiftedCharCode += 26;
            }

            result += String.fromCharCode(shiftedCharCode);

            keywordIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

const AffineDecrypt = ({ onDecrypt }) => {
    const [keyword, setKeyword] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = vigenereDecipher(encryptedText, keyword);
        setDecryptedText(result);
        if (onDecrypt) {
            onDecrypt(result);
        }
    };

    return (
        <Container>
            <Title>Affine Decryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="keyword">Keyword:</Label>
                <Input type="text" id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
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

export default AffineDecrypt;
