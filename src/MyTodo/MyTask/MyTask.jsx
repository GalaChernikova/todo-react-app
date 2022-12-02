import { useState, useEffect } from 'react';
import s from './MyTask.module.css'
import data from '../../data.json'

function MyTask(){
    const [toDoList, setToDoList] = useState(data)



    return(
        <div>

        </div>
    )
}

export default MyTask;