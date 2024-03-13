import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.key(i));
  }

  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo) => {
    const result = todos.filter((todoItem) => todoItem !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} onTodoRemove={handleRemove} />
    </div>
  );
}

export default App;
