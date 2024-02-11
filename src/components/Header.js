import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

// Цветовая палитра
const colors = {
    black: '#000',
    green: '#00ff00',
    darkGreen: '#00cc00',
    darkGray: '#333',
    smoothTransition: '#1a1a1a', // Более плавный переход от серого к черному
};

// Стилизованный компонент для шапки сайта
// Стилизованный компонент для шапки сайта
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  color: ${colors.green};
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
  }
`;


// Стилизованный компонент для заголовка
const SiteName = styled.h2`
  margin: 0;
`;

// Стилизованный компонент для навигационной панели
const Navigation = styled.div`
  display: flex;
`;

// Стилизованный компонент для ссылок-кнопок
const ButtonLink = styled(Link)`
  padding: 10px 20px;
  background-color: transparent;
  color: ${colors.green};
  text-decoration: none;
  border: 1px solid ${colors.green};
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${colors.darkGray};
    color: ${colors.darkGreen};
    border-color: ${colors.darkGreen};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;



const Header = () => {
    return (
        <HeaderContainer>
            <SiteName>Secret recording</SiteName>
            <Navigation>
                <ButtonLink to ="/Secret-recording">Home</ButtonLink>
                <ButtonLink to="/login">Login</ButtonLink>
                <ButtonLink to="/register">Register</ButtonLink>
                <ButtonLink to="/info">Information</ButtonLink>
                <ButtonLink to="/encoder">Encoder</ButtonLink>
                <ButtonLink to="/decoder">Decoder</ButtonLink>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;
