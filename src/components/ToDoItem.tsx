import React from "react";

interface IToDoItemProps {
  id: string;
  task: string;
  done: boolean;
  handleToggle: (id: string) => void;
}

const ToDoItem: React.FC<IToDoItemProps> = (props) => {
  const handleClick = (event: React.ChangeEvent<HTMLElement>) => {
    props.handleToggle(event.currentTarget.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={handleClick}
        id={props.id}
        checked={props.done}
      />
      <label>{props.task}</label>
    </div>
  );
};

export default ToDoItem;
