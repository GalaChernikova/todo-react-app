import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import s from "./UserToDo.module.css";

function UserToDo() {
  const [userToDo, setUserToDo] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/15/todos")
      .then((res) => setUserToDo(res.data.todos));
  }, []);

  return (
    <div className={s.todoContainer}>
      <h2>To-do list</h2>
      {Array.from(userToDo).map((userTask) => {
        return (
          <div key={userTask.id} className={s.todoList}>
            <input
              type="checkbox"
              checked={userTask.completed}
              disabled={true}
            />
            <p>{userTask.todo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserToDo;
