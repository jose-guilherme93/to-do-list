import React from 'react';

import './Task.css';


const Task = ({task, handleTaskClick}) => {
    // return <div className="task-container">{task.title}</div>;
    return (
    <div 
    className="task-container" 
    style={task.completed ? { borderLeft: "12px solid rgb(41, 72, 121)" } : {}}
    >
        <div 
        className="task-title" 
        onClick={() => handleTaskClick(task.id)}
        >

        {task.title}

        </div>

    </div>
);
}
export default Task;