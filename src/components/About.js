import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #121212;
  color: #fff;
`;

const Content = styled.div`
  max-width: 600px;
`;



const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <h2>Junior Software  Developer 🚀</h2>
        <h1>Sneha Bandla </h1>
        <p>
          A passionate Junior Software Developer specializing in building scalable, secure,
          and user-friendly web applications. Let’s create something amazing together!
        </p>

      </Content>
      {/* <ProfileImage src="https://via.placeholder.com/200" alt="Profile" /> */}
    </HeroContainer>
  );
};

export default Hero;
