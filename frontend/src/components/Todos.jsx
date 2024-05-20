import React, { useState } from "react";

let Todos = ({ title, description, completed }) => {
  const [complete, setComplete] = useState(completed);

  let changeData = () => {
    setComplete(complete === true ? false : true);
  };
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <button id="change" onClick={changeData}>
        {complete === true ? "Completed" : "Mark as complete"}
      </button>
    </div>
  );
};

export default Todos;
