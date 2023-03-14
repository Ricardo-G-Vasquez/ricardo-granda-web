import React from 'react';

const TechStack = ({ title = "Tech Stack", techStack }) => {
  return (
    <>
      <h5>
        <span className="place open-sans-font main-color text-uppercase">{title}</span>
      </h5>
      <p>
        {techStack}
      </p>
    </>
  )
};

export default TechStack; 