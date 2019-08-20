import React from "react";
import style from "./TodoForm.css";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: " " };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.state.value;
        this.props.addItem(this.state.value);
        this.state.value = "";
        event.preventDefault();
    }

    render() {
        return (
            <form className={style.TodoForm} onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Please type your task here"
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TodoForm;
