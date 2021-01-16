import React from "react";
import { Tag, List, Button, Popconfirm } from "antd";

const TodoItem = ({ todo, onTodoRemoval }) => {
  // console.log("todo item detail --> ", todo);
  return (
    <List.Item
      actions={[
        //   <Tooltip
        //     title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        //   >
        //     <Switch
        //       checkedChildren={<CheckOutlined />}
        //       unCheckedChildren={<CloseOutlined />}
        //       onChange={() => onTodoToggle(todo)}
        //       defaultChecked={todo.completed}
        //     />
        //   </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag className="todo-tag">{todo.todo}</Tag>
      </div>
    </List.Item>
  );
};

export default TodoItem;
