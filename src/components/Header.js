import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #006d77;
  padding: 20px;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;
`;

const Tagline = styled.p`
  margin: 0;
  font-size: 1.2em;
  font-style: italic;
`;

const Header = () => (
  <HeaderContainer>
    <Title>AquaPure</Title>
    <Tagline>Stay hydrated, stay green.</Tagline>
  </HeaderContainer>
);

export default Header;
