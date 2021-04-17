import "./styles.css";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      todo: todoInput
    });

    setTodoInput("");
  }

  return (
    <div className="App">
      <h1>Todo App </h1>
      <form className="create-task">
        <input
          className="user-input"
          type="text"
          placeholder="Write a task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <Button disabled={todoInput < 1} variant="contained" onClick={addTodo}>
          Add
        </Button>
      </form>

      <div className="task-list">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            id={todo.id}
            style={{ color: "blue" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
