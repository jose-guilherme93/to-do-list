import React from 'react';

import './Task.css';


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
 
    return (
    <div 
    className="task-container" 
    style={task.completed ? { borderLeft: "12px solid rgb(41, 72, 121)" } : {}}
    >
        <div 
        className="task-title" 
        onClick={() => handleTaskClick(task.id)}>

        {task.title}
        </div>
        <div>
            <button onClick={ () => handleTaskDeletion(task.id)} className="delete-task-button">x</button>
            <button className="info-task-button">O</button>
        </div>

    </div>
);
}
export default Task;