import React from "react";
import data from "../../../data/ExperienceContent.json";
import Company from "./Company";
import MainAchievements from "./MainAchievements";
import MainTasks from "./MainTasks";
import TechStack from "./TechStack";
import Header from "./Header";

const { experienceContent } = data;

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => {
        const {
          position,
          year,
          companyDescription,
          compnayName,
          tech_stack,
          details,
          main_achievements
        } = val;
        return (
          <li key={i}>
            <Header position={position} year={year} />
            {companyDescription && <Company companyName={compnayName} companyDescription={companyDescription} />}
            {tech_stack && <TechStack techStack={tech_stack} />}
            <MainTasks mainTasks={details} />
            {main_achievements && <MainAchievements mainAchievements={main_achievements} />}
          </li>
        )
      }
      )}
    </ul>
  );
};

export default Experience;
