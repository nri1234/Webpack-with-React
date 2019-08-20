import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { hot } from "react-hot-loader";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    text: "washing"
                },
                {
                    id: 2,
                    text: "cleaning"
                },
                {
                    id: 3,
                    text: "coding"
                },
                {
                    id: 4,
                    text: "just fun"
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title
                    title="Number of tasks"
                    tasksNumber={this.state.data.length}
                />
                <TodoForm addItem={this.addTodo.bind(this)} />
                <TodoList
                    data={this.state.data}
                    remove={this.removeTodo.bind(this)}
                />
            </div>
        );
    }
}
export default hot(module)(App);
