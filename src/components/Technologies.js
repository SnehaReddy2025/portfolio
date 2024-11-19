import React from 'react';
import styled from 'styled-components';

const SkillCard = styled.div`
  background-color: #001f3d; /* Navy Blue background */
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  width: 150px;
  height: 70px;
  text-align: center;
  margin: 10px;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const App = () => {
  const skills = [
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" width={30} height={30} />,
      name: 'HTML'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" width={30} height={30} />,
      name: 'CSS'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width={30} height={30} />,
      name: 'JavaScript'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width={30} height={30} />,
      name: 'React'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width={30} height={30} />,
      name: 'Node.js'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={30} height={30} />,
      name: 'MongoDB'
    },
    {
      logo: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width={30} height={30} />,
      name: 'MySQL (Aurora)'
    },
    {
      logo: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width={30} height={30} />,
      name: 'AWS'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Technologies I Use</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            {skill.logo}
            <p style={{ marginLeft: '10px' }}>{skill.name}</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </div>
  );
};

export default App;
