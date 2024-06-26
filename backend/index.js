const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");

const app = express();

// Allow from all the frontends
const cors = require("cors");
app.use(cors());

// Allowing only restricted amount of front-ends
/**
 * const cors = require("cors")
 * app.use(cors({
 * origin: "http://localhost:5173"
 * }))
 */

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "Please send the valid input" });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: "Todo Created!" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "Please send the valid input" });
    return;
  }

  const updateTodo = await todo.update(
    { _id: updatePayload.id },
    { completed: true }
  );

  res.json({ msg: "Todo marked as completed!" });
});

app.listen(3000);
