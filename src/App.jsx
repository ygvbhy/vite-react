import { useState } from "react";
import "./App.css";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.key(i));
  }

  return result;
}

function App() {
  // const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const todos = fetchTodos();

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    localStorage.setItem(inputText, inputText);
    setInputText("");
  };

  const handleRemove = (index, todo) => {
    todos.splice(index, 1);
  };

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(index, todo)}>
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
