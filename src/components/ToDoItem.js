import React, { useState } from 'react';

const ToDoItem = (props) => {
    const { id, task, done, handleToggle } = props
    const handleClick = (event) => {
        // event.preventDefault()
        handleToggle(event.currentTarget.id)
}
   return (
       <div>
           <input id={id} type="checkbox" onChange={handleClick} checked={done}/>
           <label> {task} </label>
       </div>
   );
};
 
export default ToDoItem;