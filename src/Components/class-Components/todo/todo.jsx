import { Component } from "react";
import { Heading1 } from "../../headings/headings";
import ButtonComponent from "../../buttons/button";

class TodoComponent extends Component {
  state = {
    todos: ["Hii good morning", "time to hit the gym"],
  };
  todoHandler = () => {
    return this.setState({
      todos: [...this.state.todos, "Complete break fast"],
    });
  };
  todoUpdateHandler = (index) => {
    console.log(index, this.state.todos);
    let newTodo = this.state.todos;
    newTodo[index] = "very  good morning";
    this.setState({
      todos: newTodo,
    });
  };
  todoDeleteHandler = (index) => {
    console.log(index, this.state.todos);
    let newTodo = this.state.todos.filter((eachtodo, i) => index != i);
    this.setState({
      todos: newTodo,
    });
  };
  render() {
    return (
      <>
        <Heading1 text="List of Todo's" />
        <ol>
          {this.state.todos.map((eachTodo, index) => {
            return (
              <>
                <li key={index}>{eachTodo}</li>
                <ButtonComponent
                  text="update"
                  onPress={() => this.todoUpdateHandler(index)}
                />
                <ButtonComponent
                  text="delete"
                  onPress={() => this.todoDeleteHandler(index)}
                />
              </>
            );
          })}
        </ol>
        <ButtonComponent text="Add todo" onPress={this.todoHandler} />
      </>
    );
  }
}
export default TodoComponent;
