import React from "react";
import Todo from "./Todo";
import style from "./TodoList.css";

const TodoList = props => {
    const items = props.data.map(item => (
        <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            remove={props.remove}
        />
    ));

    return <ul className={style.TodoList}>{items}</ul>;
};

export default TodoList;
