import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  CheckBox,
  Body,
  Icon
} from "native-base";

// Redux
import { connect } from "react-redux";

import { deleteTodo, toggleTodo } from "../store/actions/index";

const TodoList = props => {
  const todoList = props.todos.todos;

  // const [todos, setTodos] = useState(this.props.value);
  //const todos = this.props.value;

  // const addTodo = todo => {
  //   todo.id = todos.length + 1;
  //   setTodos([...todos, todo]);
  // };

  const onDelete = todo => {
    props.deleteTodo({ todo });
  };

  const onChecked = id => {
    props.toggleTodo({ id });
  };

  return (
    <List>
      {todoList.map(todo => {
        return (
          <ListItem key={todo.id}>
            <CheckBox
              checked={todo.isComplete}
              onPress={() => onChecked(todo.id)}
            />
            <Body>
              <Text>{todo.body}</Text>
            </Body>
            <Icon
              type="FontAwesome"
              name="trash-o"
              onPress={() => onDelete(todo)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { deleteTodo, toggleTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
