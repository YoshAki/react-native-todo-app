import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  CheckBox,
  Body
} from "native-base";
import AddTodoForm from "./AddTodoForm";

// Redux
import { connect } from "react-redux";
import { addTodo } from "../store/actions/index.js";

const TodoList = props => {
  const todos = props.value;
  // const todos = props.todos;

  // const [todos, setTodos] = useState(this.props.value);
  //const todos = this.props.value;

  // const addTodo = todo => {
  //   todo.id = todos.length + 1;
  //   setTodos([...todos, todo]);
  // };

  return (
    <List>
      {todos.map(todo => {
        return (
          <ListItem key={todo.id}>
            <CheckBox checked={todo.isComplete} />
            <Body>
              <Text>{todo.body}</Text>
            </Body>
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

const mapDispatchToProps = { addTodo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
