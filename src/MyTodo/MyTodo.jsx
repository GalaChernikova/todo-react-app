import { useState } from "react";
import Nav from "../Nav/Nav";
import ToDoList from "./MyTask/ToDoList";
import s from "./MyTodo.module.css";
import data from "./../data.json";
import ToDoForm from "./MyTask/ToDoForm";
import FriendsList from "../FriendsList/FriendsList";
import MyToDoComments from "../MyToDoComments/MyToDoComments";
import { NavLink } from "react-router-dom";

function MyTodo() {
  const [toDoList, setToDoList] = useState(data);

  function handleToggle(id) {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  }

  function handleFilter() {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  function addTask(userInput) {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  }

  return (
    <div className={s.wrapper}>
      <Nav />
      <div className={s.myToDoContainer}>
        <div>
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
          <ToDoForm addTask={addTask} />
        </div>

        <div>
          <NavLink to='/friends'><FriendsList /></NavLink>
          
          <MyToDoComments />
        </div>
      </div>
    </div>
  );
}

export default MyTodo;
