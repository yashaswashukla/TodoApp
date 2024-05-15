import express from "express";
import { createTodo, updateTodo } from "./types.js";
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "Please send the valid input" });
    return;
  }
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updatePayload.safeParse(parsedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ msg: "Please send the valid input" });
    return;
  }
});
