import { useState } from "react";
import s from "./ToDoForm.module.css";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input className={s.todoInput}
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Add task"
      />
      <button className={s.submit}>Submit</button>
    </form>
  );
}

export default ToDoForm;
