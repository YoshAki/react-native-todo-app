import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { Item, Input, Icon } from "native-base";
// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";
import { Field, reduxForm } from "redux-form";

const AddTodoForm = props => {
  //const { inputValue, changeInput } = props;
  const { handleSubmit } = props;

  const onSubmit = values => {
    props.addTodo({
      todo: { id: props.countTodo, body: values.body, isComplete: false }
    });
  };

  //const onSubmit = values => console.log(values);

  // const renderInput = ({ input: { onChange, ...input }, ...rest }) => {
  //   return <TextInput onChangeText={onChange} {...input} {...rest} />;
  // };
  // フォームの入力用コンポーネント。
  const renderInput = ({
    input,
    placeholder,
    label,
    meta: { touched, error }
  }) => {
    return <TextInput {...input} placeholder={placeholder} />;
  };

  return (
    <View>
      <Field
        name="body"
        props={{
          placeholder: "body"
        }}
        component={renderInput}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
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
