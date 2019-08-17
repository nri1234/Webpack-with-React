import React from "react";
import style from "./TodoList.css";

const TodoList = props =>

<div className={style.TaskList}>
    {props.data.map(todo =>
     <div key={todo.id}
onClick={() => { props.removeTodo(todo.id) }} className={style.Task}>
    <div >{todo.id}</div>
<div>{todo.text}</div>
</div>
)}
    </div>
export default TodoList;
