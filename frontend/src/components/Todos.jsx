import React from "react";

function Todos({ todos }) {
  return (
    <div>
      {todos.map((ele) => {
        return (
          <div>
            <h1>ele.title</h1>
            <h2>ele.description</h2>
            <button onClick={change}>
              {ele.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
