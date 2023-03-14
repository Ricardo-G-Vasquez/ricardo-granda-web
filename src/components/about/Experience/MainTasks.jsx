import React from 'react';

const MainTasks = ({ title = "Main Tasks", mainTasks }) => {
  return (
    <>
      <h5>
        <span className="place open-sans-font main-color text-uppercase">{title}</span>
      </h5>
      <ul className="open-sans-font no-style">{mainTasks.map((val, key) => <li key={`no-style-li-${key}`}>{val}</li>)}</ul>

    </>
  )
};

export default MainTasks; 