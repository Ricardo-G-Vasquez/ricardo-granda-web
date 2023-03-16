import React from 'react';

const Header = ({ position, year }) => (
  <>
    <div className="icon">
      <i className="fa fa-briefcase"></i>
    </div>
    <span className="time open-sans-font text-uppercase">{year}</span>
    <h5 className="poppins-font text-uppercase">
      {position}
    </h5>
  </>
);

export default Header;