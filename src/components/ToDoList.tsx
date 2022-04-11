import React from "react";
import ToDoItem from "./ToDoItem";

interface IToDoListItem {
  id: string;
  task: string;
  done: boolean;
}

interface IToDoList {
  toDoList: IToDoListItem[];
  handleToggle: (id: string) => void;
}

const ToDoList: React.FC<IToDoList> = (props) => {
  return (
    <div>
      {props.toDoList.map((item) => {
        return (
          <ToDoItem key={item.id} {...item} handleToggle={props.handleToggle} />
        );
      })}
    </div>
  );
};

export default ToDoList;
