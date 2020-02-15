import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { StyleSheet, View } from "react-native";
import { Text, Container, Header, Body, Title, Content } from "native-base";

// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";

const Layout = props => {
  //
  //   const [todos, setTodos] = useState(todoList);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Todo List</Title>
        </Body>
      </Header>
      <Content>
        <AddTodoForm />
        <TodoList />
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
