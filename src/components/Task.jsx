import React from 'react';

import './Task.css';
import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory()
    const handleTaskDetailsCLick = () => {
    history.push(`/${task.title}`)
    }
    return (
    <div 
        className="task-container" 
        style={task.completed ? { borderLeft: "12px solid rgb(41, 72, 121)", textDecoration: "line-through" } : {}}>

        <div 
        className="task-title" 
        onClick={() => handleTaskClick(task.id)}>

        {task.title}
        </div>
        <div>
            <button 
            onClick={ () => handleTaskDeletion(task.id)} className="delete-task-button"><CgClose/></button>

            <button className="info-task-button" onClick={handleTaskDetailsCLick}><CgInfo/></button>
        </div>

    </div>
);
}
export default Task;