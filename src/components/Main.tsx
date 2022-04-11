import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import initialToDos from "../assets/data.json";

const Main = () => {
  const [toDoList, setToDoList] = useState(initialToDos); // value, setter

  const handleToggle = (id: string) => {
    console.log("Task clicked! ID: %i", id);
    const toggledList = toDoList.map((item) => {
      return item.id === String(id)
        ? { ...item, done: !item.done }
        : { ...item };
    });
    setToDoList(toggledList);
  };

  const addTask = (userInput) => {
    // ToDoForm
    const newList = [
      ...toDoList,
      { id: String(toDoList.length + 1), task: userInput, done: false },
    ];
    setToDoList(newList);
  };

  return (
    <main>
      <h3>Tasks</h3>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <ToDoForm addTask={addTask} />
    </main>
  );
};

export default Main;
