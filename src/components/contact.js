import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';  

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>📫 Let's Get in Touch: Ways to Connect with  Me</h2>
      <p>
      Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at snehareddy2025@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.
      </p>
      <ul>
        <li>
        <FaEnvelope /> Email: <a href="mailto:snehareddy2025@gmail.com">snehareddy2025@gmail.com</a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sneha-reddy-080918236"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </li>
      </ul>
    </section>
  );
};

export default Contact;
