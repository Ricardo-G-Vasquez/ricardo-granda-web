import React from 'react';

const Company = ({ companyName, companyDescription }) => {
  return (
    <>
      <h5>
        <span className="place open-sans-font">{companyName}</span>
      </h5>
      <p>
        {companyDescription}
      </p>
    </>
  )
};

export default Company; 