import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #111;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #333;
  max-width: 300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
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
  background-color: #00ff00;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #00cc00;
  }
`;

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

// Функция для дешифровки текста по шифру Бэкона
function baconDecipher(encryptedText) {
    const alphabetMap = alphabet();
    let decryptedText = '';

    // Разделим зашифрованный текст на отдельные блоки по 5 символов
    const splitText = encryptedText ? encryptedText.match(/.{1,5}/g) : [];

    // Проходим по каждому блоку символов и находим соответствующий символ из алфавита
    splitText.forEach((block) => {
        const char = Object.keys(alphabetMap).find((key) => alphabetMap[key] === block);
        decryptedText += char ? char : ''; // Если символ найден, добавляем его к расшифрованному тексту
    });

    return decryptedText;
}

const BaconDecrypt = () => {
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = baconDecipher(encryptedText);
        setDecryptedText(result);
    };

    return (
        <Container>
            <Title>Bacon Cipher Decryption</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="text">Encrypted Text:</Label>
                <Input type="text" id="text" value={encryptedText} onChange={(e) => setEncryptedText(e.target.value)} />
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

export default BaconDecrypt;
