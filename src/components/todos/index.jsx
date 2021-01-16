import React, { useState } from "react";
import short from "short-uuid";
import CreateTodo from "./createTodo";
import ListTodo from "./listTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(
      todos.concat({
        todo: todo,
        id: short.generate(),
      })
    );
  };

  const onTodoRemoval = (todo) => {
    let newTodos = [...todos];
    let index;
    newTodos.forEach((val, idx) => {
      if (val.id === todo.id) {
        index = idx;
      }
    });
    index || index === 0 ? newTodos.splice(index, 1) : (newTodos = todos);
    setTodos(newTodos);
  };
  return (
    <>
      <CreateTodo addTodo={addTodo} />
      <ListTodo todos={todos} onTodoRemoval={onTodoRemoval} />
    </>
  );
};

export default Todos;
