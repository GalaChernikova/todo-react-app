import s from "./Main.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../images/logo.png";
import Info from "./Info/Info";

function Main() {
  return (
    <div className={s.container}>
      <h1>My TO-DO app</h1>

      <div className={s.main}>
        <img src={logo} className={s.logo}></img>

        <div className={s.start}>
          <NavLink to="/todo">START</NavLink>
        </div>
      </div>
      
      <Info />
    </div>
  );
}

export default Main;
