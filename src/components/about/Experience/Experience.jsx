import React from "react";
import data from "../../../data/ExperienceContent.json";
import Company from "./Company";
import MainAchievements from "./MainAchievements";
import MainTasks from "./MainTasks";
import TechStack from "./TechStack";

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
          {val.tech_stack && <TechStack techStack={val.tech_stack} />}
          <MainTasks mainTasks={val.details} />
          {val.main_achievements && <MainAchievements mainAchievements={val.main_achievements} />}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
