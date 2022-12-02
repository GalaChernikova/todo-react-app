import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import AddComment from '../AddComment/AddComment';
import s from './UserComments.module.css'

function UserComments(){
    const [comments, setComments] = useState('')

    useEffect(() => {
        axios
            .get('https://dummyjson.com/comments?limit=5&skip=15&select=body,postId')
            .then(res => setComments(res.data.comments))
    }, [])

    return(
        <div className={s.commentsContainer}>
            <h2>Comments</h2>
            {Array.from(comments).map((com) => {
                return(
                    <div key={com.id} className={s.comment}>
                        <h4>{com.user.username}:</h4>
                        <p>{com.body}</p>
                    </div>
                )
            })}
            <AddComment />
        </div>
    )
}

export default UserComments;