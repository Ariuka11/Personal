import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="type"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TodoList;
