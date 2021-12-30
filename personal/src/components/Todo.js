import React from "react";

export default function Todo({ todo, deleteTodo, completedTodo, index }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      <button className="completed" onClick={() => completedTodo(index)}>
        {todo.completed ? "Completed" : "complete"}
      </button>
      <button className="delete" onClick={() => deleteTodo(index)}>
        X
      </button>
    </div>
  );
}
