import s from "./ToDo.module.css";

function ToDo({ todo, handleToggle }) {
  function handleClick(e) {
    e.preventDefault();
    handleToggle(e.target.id);
  }

  return (
    <div
      className={todo.complete ? s.strike : s.todo}
      name='todo'
      id={todo.id}
      key={todo.id + todo.task}
      value={todo.id}
      onClick={handleClick}
    >
      {todo.task}      
    </div>
  );
}

export default ToDo;
