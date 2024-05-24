import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('https://example.com/hero-image.jpg') no-repeat center center;
  background-size: cover;
  height: 60vh;
  color: #fff;
  text-align: center;
`;

const HeroText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

const HeroTitle = styled.h2`
  margin: 0;
  font-size: 2.5em;
`;

const HeroSubtitle = styled.p`
  margin: 0;
  font-size: 1.5em;
`;

const Hero = () => (
  <HeroContainer>
    <HeroText>
      <HeroTitle>AquaPure Water Bottle</HeroTitle>
      <HeroSubtitle>The ultimate eco-friendly hydration solution.</HeroSubtitle>
    </HeroText>
  </HeroContainer>
);

export default Hero;
