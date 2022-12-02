import ToDo from "./ToDo";
import s from "./ToDoList.module.css";

function ToDoList({ toDoList, handleToggle, handleFilter }) {
  return (
    <div  className={s.myToDo}>
    <h2>My to-do list</h2>

      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      
      <button className={s.button} onClick={handleFilter}>
        Clear completed
      </button>
    </div>
  );
}

export default ToDoList;
