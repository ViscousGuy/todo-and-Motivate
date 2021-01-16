import React, { useState } from "react";
import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const CreateTodo = ({ addTodo }) => {
  const [state, setState] = useState("");
  const [form] = Form.useForm();

  const handleSubmit = () => {
    if (state) {
      form.resetFields();
      addTodo(state);
      setState("");
    }
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name={"name"}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input
              placeholder="What needs to be done?"
              value={state}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateTodo;
