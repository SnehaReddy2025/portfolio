import React from 'react';
import styled from 'styled-components';

const SectionsContainer = styled.div`
  display: flex;
  gap: 40px; /* Space between the two sections */
  margin-bottom: 20px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%; /* Adjust width to control the size of the section */
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%; /* Adjust width to control the size of the section */
`;

const Title = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: #f9a826;
  border-radius: 50%;
  margin-top: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Company = styled.h3`
  font-size: 18px;
`;

const Role = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const Date = styled.span`
  font-size: 12px;
  color: #666;
`;

const Description = styled.ul`
  margin-top: 10px;
  color: #ddd;
  font-size: 12px;
`;

const Institution = styled.h3`
  font-size: 18px;
`;

const Degree = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const Year = styled.span`
  font-size: 12px;
  color: #666;
`;

const Experience = () => {
    const experiences = [
        {
          date: "SEPTEMBER 2023 - PRESENT",
          company: "360 App (Employee Connector)",
          role: "Junior Software Developer",
          description: [
            "Developed and maintained dynamic, full-stack web applications using technologies like JavaScript, Node.js, and MongoDB, ensuring scalable, responsive, and secure solutions.",
            "Led key integrations for employee data management, creating seamless interfaces for HR departments to handle employee records and workflows efficiently.",
            "Collaborated closely with cross-functional teams, including designers, backend developers, and project managers, to ensure timely feature delivery and align with product goals.",
            "Implemented various APIs and backend solutions for data handling, including MongoDB integration and data validation to enhance system performance.",
            "Refined front-end components using React, ensuring a modern, intuitive user experience for both web and mobile platforms."
          ],
        },
        {
          date: "DECEMBER 2023 - PRESENT",
          company: "RadSpeak AI",
          role: "Junior Software Developer",
          description: [
            "Developed and optimized AI-driven applications, focusing on building robust web solutions that supported real-time data processing and machine learning models.",
            "Collaborated with machine learning engineers to integrate AI capabilities into the platform, working on backend and frontend functionalities for improved performance.",
            "Built and managed scalable databases, ensuring seamless data flow between AI models and frontend user interfaces, leveraging MongoDB and AWS for cloud storage.",
            "Worked in an agile team environment, participating in sprint planning, code reviews, and feature development to deliver iterative improvements to the product.",
            "Designed intuitive user interfaces and data visualization dashboards to display complex AI insights in a user-friendly format, improving decision-making for clients."
          ],
        }
      ];
      

  return (
    <ExperienceContainer>
      <Title>💼 Experience</Title>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <Dot />
          <Content>
            <Company>{exp.company}</Company>
            <Role>{exp.role}</Role>
            <Date>{exp.date}</Date>
            <Description>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </Description>
          </Content>
        </TimelineItem>
      ))}
    </ExperienceContainer>
  );
};

const Education = () => {
  const education = [
    {
      year: "2019 - 2023",
      institution: "Jawaharlal Nehru University Anathapur(JNTUA)",
      degree: "Computer Science and Engineering",
    },
  ];

  return (
    <EducationContainer>
      <Title>🎓 Education</Title>
      {education.map((edu, index) => (
        <TimelineItem key={index}>
          <Dot />
          <Content>
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            <Year>{edu.year}</Year>
          </Content>
        </TimelineItem>
      ))}
    </EducationContainer>
  );
};

const App = () => (
  <SectionsContainer>
    <Education />
    <Experience />
  </SectionsContainer>
);

export default App;