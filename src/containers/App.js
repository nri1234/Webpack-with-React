import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
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
                    text: "learnig"
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
        //użycie zmiennej typu const, aby upewnić się, że zmienna nigdy nie będzie nadpisywana,
        // operator spread na tablicy (this.state.data) i jednoczesne stworzenie nowej tablicy z dodatkowym elementem na końcu (todo). Ten zabieg to sprytna konstrukcja, pełniąca rolę metody push, ale działa bez modyfikowania stanu,
        // korzystanie ze skróconego zapisu obiektu. Zamiast pisać { data: data }, zastosowaliśmy samo { data }. ES6 bez problemu zrozumie taką składnię i będzie wiedział, że tak naprawdę chodzi o { data: data }.
    }
    removeTodo = id => {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    };
    render() {
        return (
            <div className={style.TodoApp}>
                <Title
                    title={"Number of tasks"}
                    TodoList={this.state.data.length}
                />
                <TodoList data={this.state.data} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

export default hot(module)(App);
