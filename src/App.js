import React from 'react';
import styled from 'styled-components';
import About from './components/About';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/contact';  // Changed from 'contact' to 'Contact'

const Container = styled.div`
  background-color: #121212;
  color: #fff;
`;

const Section = styled.div`
  padding: 100px;
  border-bottom: 1px solid #333;
`;

const App = () => {
  return (
    <Container>
      <Section>
        <About />
      </Section>
      <Section>
        <Technologies />
      </Section>
      <Section>
        <Education />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section>
        <Contact />  {/* Changed 'contact' to 'Contact' */}
      </Section>
    </Container>
  );
};

export default App;
