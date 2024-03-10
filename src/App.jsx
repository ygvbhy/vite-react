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
          <li>할일 추가</li>
          <li>할일 조회</li>
          <li>할일 삭제</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
