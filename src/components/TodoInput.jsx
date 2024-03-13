import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleCilck = () => {
    onTodoAdd(inputText);
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleCilck}>add</button>
    </div>
  );
}

export default TodoInput;
