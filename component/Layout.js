import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { StyleSheet, View } from "react-native";
import { Text, Container, Header, Body, Title, Content } from "native-base";

// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";

const Layout = props => {
  const addTodo = () => {
    props.addTodo({
      todo: { id: 4, body: "Create Todo App", isComplete: true }
    });
  };

  //
  //   const [todos, setTodos] = useState(todoList);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Hooks Todo List</Title>
        </Body>
      </Header>
      <Content>
        <AddTodoForm />
        <TodoList value={props.todos} />
      </Content>
    </Container>
  );
};

// export default Layout;

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { addTodo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
