import React from 'react'
import './TaskDetails.css'
import { useParams, useHistory } from 'react-router-dom'

import Button from './Button'
// import Task from './Task'

const TaskDetails = () => {

    const params = useParams()
    const history = useHistory()

    const handleBackbutton = () => {
        history.goBack()
    }
 
    return ( 
        <>
            <div className="button-task-details">
                <Button onClick={handleBackbutton}>Voltar</Button>
                
            </div>
            <div className="task-details-paragraph">
                <h2 className="task-title-details">{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos, maxime aspernatur accusantium placeat distinctio!</p>
            </div>
        </>
    )
}
 
export default TaskDetails