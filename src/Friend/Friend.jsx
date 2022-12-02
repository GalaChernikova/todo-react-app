import Nav from '../Nav/Nav';
import s from './Friend.module.css'
import FriendInfo from '../FriendInfo/FriendInfo';
import UserToDo from '../UserToDo/UserToDo';
import UserComments from '../UserComments/UserComments';

function Friend(){
    return(
        <div>
            <Nav />
            <div className={s.container}>
                <FriendInfo /> 
                <UserToDo />
                <UserComments />
            </div>
        </div>
    )
}

export default Friend;