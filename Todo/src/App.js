import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  console.log(todos);
  useEffect(() => {
    setCount(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text, completed: false, id: Math.random() }];
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = [...todos];
    newTodo.splice(id, 1);
    setTodos(newTodo);
  };

  const completedTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].completed = !newTodo[index].completed;
    setTodos(newTodo);
  };

  return (
    <div className="App">
      {todos.length > 0 ? (
        <h1>Pending Task {count}</h1>
      ) : (
        <h1>Your todo list</h1>
      )}

      {todos &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          );
        })}
      <TodoForm todos={todos} setTodos={setTodos} addTodo={addTodo} />
    </div>
  );
}

export default App;
