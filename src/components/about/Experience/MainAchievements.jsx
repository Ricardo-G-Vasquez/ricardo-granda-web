import React from 'react';

const MainAchievements = ({ title = "Main Achievements", mainAchievements }) => {
  return (
    <>
      <h5>
        <span className="place open-sans-font main-color text-uppercase">{title}</span>
      </h5>
      <ul className="open-sans-font no-style">
        {
          mainAchievements?.map((achievement, index) => {
            const { title, problem_description: problem, solution } = achievement;
            return (
              <>
                <li key={`achievement-${index}`}>
                  <h6>{title}</h6>
                  <section>
                    <h7>The Problem</h7>
                    <p>{problem}</p>
                  </section>
                  <section>
                    <h7>Solution</h7>
                    <p>{solution}</p>
                  </section>
                </li>
              </>
            )
          })}
      </ul>
    </>
  )
};

export default MainAchievements; 