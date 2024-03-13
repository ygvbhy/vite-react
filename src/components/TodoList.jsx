function TodoList({ todos }) {
  const handleRemove = (todo) => {
    const result = todos.filter((todoItem) => todoItem !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo)}>remove</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default TodoList;
