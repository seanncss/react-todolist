import React, { useState } from 'react';
import { InterfaceType } from 'typescript';

interface props {
    id: number,
    task: string,
    done: boolean,
    handleToggle(id: number): any
}

const ToDoItem = (props: any) => {
    const handleClick = (event: React.ChangeEvent<HTMLElement>): any => {
        props.handleToggle(event.currentTarget.id);
        }
    return (
       <div>
           <input id={props.id} type="checkbox" onChange={handleClick} checked={props.done}/>
           <label> {props.task} </label>
       </div>
   );
};
 
export default ToDoItem;