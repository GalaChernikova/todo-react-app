import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'

function Nav(){
    return(
        <div className={s.navContainer}>
            <NavLink to='*'>Main</NavLink>
            <NavLink to='/todo'>My to-do list</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
        </div>
    )
}

export default Nav;