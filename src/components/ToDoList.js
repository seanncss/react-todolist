import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    const { toDoList, handleToggle } = props
    return (
        <div>
            {toDoList.map(item => {
                return (
                    <ToDoItem key={item.id} id={item.id} task={item.task} done={item.done} handleToggle={handleToggle}/>
                )
            })}
        </div>
    );

};

export default ToDoList;