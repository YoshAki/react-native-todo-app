import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { Item, Input, Icon } from "native-base";
// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";
import { Field, reduxForm } from "redux-form";

const AddTodoForm = props => {
  const { handleSubmit } = props;

  const onSubmit = values => {
    props.addTodo({
      todo: { id: props.countTodo, body: values.body, isComplete: false }
    });
  };

  // フォームの入力用コンポーネント。
  const renderInput = ({
    input,
    placeholder,
    label,
    meta: { touched, error }
  }) => {
    return <Input {...input} placeholder={placeholder} />;
  };

  return (
    <Item>
      <Field
        name="body"
        props={{
          placeholder: "todo..."
        }}
        component={renderInput}
      />
      <Icon
        type="Feather"
        name="plus"
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </Item>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    countTodo: state.todos.todos.length
  };
};

const mapDispatchToProps = { addTodo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "todo-add-form" })(AddTodoForm));
