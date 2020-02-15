import React, { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";

// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";

const AddTodoForm = props => {
  const addTodo = () => {
    props.addTodo({
      todo: { id: 4, body: "Create Todo App", isComplete: true }
    });
  };

  return <Button title="test" onPress={addTodo}></Button>;
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { addTodo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoForm);
