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
          value={input}
          placeholder="Todo..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="add">Add</button>
      </form>
    </div>
  );
}
