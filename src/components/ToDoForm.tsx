import React, { useState } from "react";

interface IToDoForm {
  addTask: (userInput: string) => void
}

const ToDoForm: React.FC<IToDoForm>  = (props) => {
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {setUserInput(event.currentTarget.value)}
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault(); // Don't want default action with forms because it reloads the initial page render
      props.addTask(userInput);
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