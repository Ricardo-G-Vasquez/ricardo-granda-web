import React from "react";
import { propTypes } from "react-animated-cursor";
import data from "../../../data/ExperienceContent.json";
import Company from "./Company";

const { experienceContent } = data;

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
          </h5>
          <Company companyName={val.compnayName} companyDescription={val.companyDescription} />
          <ul className="open-sans-font no-style">{val.details.map((val, key) => <li key={`no-style-li-${key}`}>{val}</li>)}</ul>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
