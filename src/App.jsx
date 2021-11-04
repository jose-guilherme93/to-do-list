import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

import './App.css'

import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";


const App = () => {
  const [tasks, setTasks] = useState (localStorage.getItem('tasks') ||
    [
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
  ]
  )
    
    // const handleLocalStorage = React.useEffect = () => {localStorage.setItem('tasks')}
    localStorage.setItem('nome' , 'on')
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
      <Router>
          <div className="container" >
                  <header>Minhas Tarefas</header>
                <Route path="/" exact render={() => (
                  <>
                  <AddTask handleTaskAddtion={handleTaskAddtion} />
                    
                  <Tasks tasks={tasks} 
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion} />

                  <div className="footer">
                    <Footer/>
                  </div>
                    </>  
                )}/>
                <Route path="/:taskTitle" exact component={TaskDetails}/>
          </div>
      </Router>
      );
};


export default App;