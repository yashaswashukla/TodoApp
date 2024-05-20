import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
        }}
      ></input>
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: {
              title: "Hello",
              description: "Nice",
            },
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
