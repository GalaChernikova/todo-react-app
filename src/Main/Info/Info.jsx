import s from "./Info.module.css";
import maketodo from "./../../images/maketodo.png";
import friends from "./../../images/friends.png";
import likes from "./../../images/likes.png";

function Info() {
  return (
    <div className={s.info}>
      <div className={s.infotem}>
        <img src={maketodo}/>
        <h3>Make your to-do list</h3>
      </div>
      <div className={s.infotem}>
        <img src={friends}/>
        <h3>Add friends and share your tasks</h3>
      </div>
      <div className={s.infotem}>
        <img src={likes}/>
        <h3>Share motivation</h3>
      </div>
    </div>
  );
}

export default Info;
