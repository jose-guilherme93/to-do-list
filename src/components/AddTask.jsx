import React, { useState } from 'react';
import "./addTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddtion}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
       

    }
    const handleAddTaskClick = () => {
        handleTaskAddtion(inputData)
        setInputData('')
    }
    return ( 
        <div className="add-task-container">
            <input 
            onChange={handleInputChange} 
            value={inputData} 
            type="text" 
            className="add-input-task" />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>
        
     );
}
 
export default AddTask;
