import React from 'react';
import styled from 'styled-components';
import {
    affineCipherInfo,
    atbashCipherInfo,
    baconCipherInfo,
    caesarCipherInfo,
    morseCipherInfo,
    vigenereCipherInfo
} from '../Info/Info';

// Цветовая палитра
const colors = {
    black: '#000',
    green: '#00ff00',
    darkGreen: '#00cc00',
    darkGray: '#333',
    smoothTransition: '#1a1a1a',
};

// Стилизованный компонент для контейнера с карточками
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Одна карточка в столбце на мобильных устройствах
  gap: 20px; // Промежуток между карточками

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // Три карточки в ряд на устройствах с шириной экрана больше 768px
  }
`;

// Стилизованный компонент для контейнера каждой карточки
const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${colors.black};
  color: ${colors.green};
  border-radius: 10px;
  border: 1px solid ${colors.green};
  margin-bottom: 20px;
`;

// Стилизованный компонент для заголовка карточки
const CardTitle = styled.h3`
  margin-top: 0;
`;

// Стилизованный компонент для текста карточки
const CardText = styled.p`
  margin-bottom: 10px;
`;

// Стилизованный компонент для ссылки в карточке
const CardLink = styled.a`
  color: ${colors.green};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.darkGreen};
  }
`;

// Компонент для отображения информации о шифре
const CipherInfo = ({ cipherInfo }) => {
    // Деструктурируем данные из объекта cipherInfo
    const { title, description, usage } = cipherInfo;

    // Возвращаем JSX, используя данные из объекта
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardText><strong>Usage:</strong></CardText>
            <ul>
                {usage.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </CardContainer>
    );
};

// Главный компонент приложения
const App = () => {
    return (
        <CardGrid>
            <CipherInfo cipherInfo={caesarCipherInfo} />
            <CipherInfo cipherInfo={affineCipherInfo} />
            <CipherInfo cipherInfo={atbashCipherInfo} />
            <CipherInfo cipherInfo={baconCipherInfo} />
            <CipherInfo cipherInfo={morseCipherInfo} />
            <CipherInfo cipherInfo={vigenereCipherInfo} />
        </CardGrid>
    );
};

export default App;
