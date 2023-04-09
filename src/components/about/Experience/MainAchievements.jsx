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
                  <h5>{title}</h5>
                  <section>
                    <h6>The Problem</h6>
                    <p>{problem}</p>
                  </section>
                  <section>
                    <h6>Solution</h6>
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