import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './MyToDoComments.module.css'

function MyToDoComments(){
    const [comments, setComments] = useState('')

    useEffect(() => {
        axios
            .get('https://dummyjson.com/comments?limit=6')
            .then(res => setComments(res.data.comments))
    }, [])

    return(
        <div className={s.commentsContainer}>
            <h2>Comments</h2>
            {Array.from(comments).map((comment) => {
                return(
                    <div className={s.comment} key={comment.postId}>
                        <h4>{comment.user.username}:</h4>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MyToDoComments;