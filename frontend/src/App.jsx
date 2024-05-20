import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

let App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const list = await res.json();
      setTodos(list.todos);
    });
  }, []);
  return (
    <>
      <CreateTodo />
      {todos.map((ele) => (
        <Todos
          key={ele.id}
          title={ele.title}
          description={ele.description}
          completed={ele.completed}
          setTodos={setTodos}
        />
      ))}
    </>
  );
};

export default App;
