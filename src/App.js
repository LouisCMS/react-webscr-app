import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo, saveRow }) {
  return (
    <div
      className="todo"
      // style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.name}  
      {todo.mail}
      <div>
        <button onClick={() => removeTodo(index)}>x</button>
        {/* <button onClick={()=> saveRow(index)}>ajouter requête</button> */}
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      name: "Donald",
      mail : "Donald@gmail.com",
      requete : "Maison à miami près du golf",
      lbc_url : "www.leboncoin.fr/request=maison-pout-donald",
      isCompleted: false
    }
    // ,
    // {
    //   text: "Meet friend for lunch",
    //   isCompleted: false
    // },
    // {
    //   text: "Build really cool todo app",
    //   isCompleted: false
    // }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const saveRow = index => {
    const newTodos = [...todos];
    newTodos[index].isValidated = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            saveRow={saveRow}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;