import s from "./FriendsList.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function FriendsList() {
  const [friends, setFriends] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://dummyjson.com/users?limit=5&skip=10&select=firstName,lastName,image"
      )
      .then((res) => setFriends(res.data.users));
  }, []);

  return (
    <div className={s.userContainer}>
      <h2>Friends</h2>
      <div className={s.allUsers}>
        {Array.from(friends).map((friend) => {
          return (
            <div key={friend.id} className={s.user}>
              <img src={friend.image} className={s.userImg} />
              <h4>
                {friend.firstName} {friend.lastName}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FriendsList;
