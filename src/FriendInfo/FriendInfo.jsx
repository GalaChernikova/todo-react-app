import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import s from "./FriendInfo.module.css";

function FriendInfo() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/15")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className={s.userProfile}>
      <h4>
        {user.firstName} {user.lastName}
      </h4>
      <img src={user.image} />
    </div>
  );
}

export default FriendInfo;
