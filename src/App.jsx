import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    result.push(localStorage.key(i));
  }

  return result;
}

function App() {
  // const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(fetchTodos());

  // const handleInput = (event) => {
  //   const value = event.target.value;
  //   setInputText(value);
  // };

  // const handleClick = () => {
  //   localStorage.setItem(inputText, inputText);
  //   setTodos((currentTodos) => {
  //     return [...currentTodos, inputText];
  //   });
  //   setInputText("");
  // };

  const handleRemove = (todo) => {
    const result = todos.filter((todoItem) => todoItem !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      {/* <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>add</button>
      </div> */}
      <TodoInput />
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
    </div>
  );
}

export default App;
