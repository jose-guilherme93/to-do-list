import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import Tasks from './components/Tasks';
import './App.css'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer"


const App = () => {
  const [tasks, setTasks] = useState ([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,

    },
    {
      id: '2',
      title: 'ler livro',
      completed: false,
    }
  ])
    

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
        if (task.id === taskId) return {...task, completed: !task.completed}
        
        return task
      })

      setTasks(newTasks)

    }
    const handleTaskAddtion = (taskTitle) => {
      const newTasks = [
        ...tasks,  
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ]
      setTasks(newTasks)
    }

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId)
        setTasks(newTasks)
    }
 
    return (
      <>
        <div className="container" >
          <AddTask handleTaskAddtion={handleTaskAddtion} />
          
          <Tasks tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion} />

            <div className="footer">
              <Footer/>
            </div>
        </div>
          
        
      </>
      );
};


export default App;