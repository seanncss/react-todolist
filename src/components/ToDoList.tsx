import React from "react";
import ToDoItem from "./ToDoItem";

interface data {
    id: number,
    task: string,
    done: boolean
}
type dataType = data[];

interface props {
    toDoList: dataType,
    handleToggle(id: number): any
}

const ToDoList = (props: any) => {
    return (
        <div>
            {props.toDoList.map((item: any) => {
                return (
                    <ToDoItem key={item.id} id={item.id} task={item.task} done={item.done} handleToggle={props.handleToggle}/>
                )
            })}
        </div>
    );

};

export default ToDoList;