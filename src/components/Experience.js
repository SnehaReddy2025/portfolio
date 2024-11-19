import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>📂 Top Repositories</h2>
      <ul>
        <li>
          <strong>
            <a href="https://github.com/Radscribe-1/EmployeeConnector" target="_blank" rel="noopener noreferrer">
              EmployeeConnector
            </a>
          </strong>
          - An attendance management application tracking employee attendance, managing shifts, and recording leave data.
        </li>
        <li>
          <strong>
            <a href="https://github.com/Radscribe-1/Radspeakai-server" target="_blank" rel="noopener noreferrer">
              Radspeakai-server
            </a>
          </strong>
          - A backend system for real-time transcription of audio into text.
        </li>
      </ul>
    </section>
  );
};

export default Projects;
