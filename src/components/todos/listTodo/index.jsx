import React from "react";
import { List } from "antd";
import TodoItem from "./todoItem";

const ListTodo = ({ todos, onTodoRemoval }) => {
  return (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem todo={todo} onTodoRemoval={onTodoRemoval} />
      )}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
};

export default ListTodo;
