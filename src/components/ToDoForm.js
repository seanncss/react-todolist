import React, { useState } from "react";

const ToDoForm = (props) => {
    const { addTask } = props;
      const [ userInput, setUserInput ] = useState('');
    const handleChange = (event) => {setUserInput(event.currentTarget.value)}
    const handleSubmit = (event) => {
      event.preventDefault(); // Don't want default action with forms because it reloads the initial page render
      addTask(userInput);
      setUserInput(""); // Reset form to empty input
    }
    return (
      <form onSubmit={handleSubmit}>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <button onClick={handleSubmit}>Submit </button>
      </form>
    )
  }

  export default ToDoForm