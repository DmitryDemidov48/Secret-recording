import React from 'react';
import styled from 'styled-components';

// Цветовая палитра
const colors = {
    black: '#000',
    green: '#00ff00',
    darkGreen: '#00cc00',
    darkGray: '#333',
    smoothTransition: '#1a1a1a', // Более плавный переход от серого к черному
};

// Стилизованный компонент для шапки сайта
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  color: ${colors.green};
  padding: 20px;
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
const NavLink = styled.a`
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
            <SiteName>SecretScribe</SiteName>
            <Navigation>
                <NavLink href="/SecretScribe">Home</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/info">Information</NavLink>
                <NavLink href="/encoder">Encoder</NavLink>
                <NavLink href="/decoder">Decoder</NavLink>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;
