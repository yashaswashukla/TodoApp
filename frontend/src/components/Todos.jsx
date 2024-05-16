import React from "react";

function Todos({ todos }) {
  let changeData = () => {
    const btn = document.getElementById("change").value;
    if (btn === "Mark as Complete")
      document.getElementById("change").innerHTML = "Completed";
    return;
  };
  return (
    <div>
      {todos.map((ele) => {
        return (
          <div>
            <h1>ele.title</h1>
            <h2>ele.description</h2>
            <button id="change" onClick={changeData}>
              {ele.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
