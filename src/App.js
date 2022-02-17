import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [searchBar, setSearchBar] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adding = {
      task: newTodo,
      id: Math.floor(Math.random() * 100000),
    };
    if (newTodo.length) {
      setTodos(todos.concat(adding));
      setNewTodo("");
    }
  };

  const handleClick = (id) => {
    setTodos(
      todos.filter((event) => {
        return id !== event.id;
      })
    );
  };

  const searchTodos = (e) => {
    setSearchBar(e.target.value);
  };

  if (todos.length === 0) {
    return (
      <div>
        <div className="center">
          <div className="container-of-todos">
            <h1 className="head">ToDos :</h1>
            <ul>
              {todos
                .filter((val) => {
                  if (searchBar === "") {
                    return val;
                  } else if (
                    val.task
                      .toLowerCase()
                      .includes(searchBar.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((todo) => {
                  return (
                    <li key={todo.id}>
                      {todo.task}
                      <button
                        className="button-9"
                        onClick={() => handleClick(todo.id)}
                      >
                        delete
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="add">
            <h2>Add ToDos</h2>
            <input value={newTodo} onChange={handleChange} />
            <button className="button-9" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="center">
      <div className="header">
        <div className="searchbar">
          <h2>Search ToDos</h2>
          <input
            type="text"
            value={searchBar}
            onChange={searchTodos}
            name="search"
          />
        </div>
      </div>

      <div className="container-of-todos">
        <h1 className="head">ToDos :</h1>
        <ul>
          {todos
            .filter((val) => {
              if (searchBar === "") {
                return val;
              } else if (
                val.task.toLowerCase().includes(searchBar.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.task}
                  <button
                    className="button-9"
                    onClick={() => handleClick(todo.id)}
                  >
                    delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="add">
        <h2>Add ToDos</h2>
        <input value={newTodo} onChange={handleChange} />
        <button className="button-9" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
