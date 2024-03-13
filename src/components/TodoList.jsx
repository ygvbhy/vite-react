import { useState } from "react";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.key(i));
  }

  return result;
}

function TodoList() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo) => {
    const result = todos.filter((todoItem) => todoItem !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => handleRemove(todo)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
