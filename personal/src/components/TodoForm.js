import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
