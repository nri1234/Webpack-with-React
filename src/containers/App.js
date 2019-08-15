import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import todoList from "../components/TodoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }
    render() {
        return (
            <div className={style.TodoApp}>
            <Title title={'Number of tasks'} todoList={todoList.length}/>
            </div>
        );
    }
}

export default App;
