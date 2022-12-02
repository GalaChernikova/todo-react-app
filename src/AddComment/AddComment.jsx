import { useEffect } from "react";
import { useState } from "react";
import s from "./AddComment.module.css";
import axios from "axios";

function AddComment() {
  const [myComment, setMyComment] = useState("");

  function addComment() {
    axios
      .post("https://dummyjson.com/comments/add", {
        headers: { "Content-Type": "application/json" },
        body: "This makes all sense to me!",
        postId: 3,
        userId: 5,
      })
      .then((res) => setMyComment(res.data.comments));
  }


  function handleChange(e) {
    setMyComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(myComment);
    setMyComment("");
  }

  return (
    <form className={s.sendComment} onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Add comment" />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddComment;
