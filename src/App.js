import { useState,useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
  const [showAdd,setAdd]=useState(true)
  const [tasks,setTasks]=useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

 

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const deleteTask=async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"Delete"
  })
   setTasks(tasks.filter((task)=>task.id!==id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
const addTask=async (task)=>{
 const res=await fetch('http://localhost:5000/tasks',{
  method:'Post',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(task)
 })
 const data=await res.json()
 setTasks([...tasks,data])


  // const id=(Math.floor(Math.random()*10+1))
  // const newTask={id,...task}
  // setTasks([...tasks,newTask])
 
}


  return (
    <BrowserRouter>
    <div className="container">
     <Header show={()=>setAdd(!showAdd)} showText={showAdd}/>
    
     <Routes>
     <Route path='/' element={<><AddTask showAdd={showAdd} onAdd={addTask}/>{<Tasks length={tasks.length} tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/>}</>}/>
     <Route path='/about' element={<About/>}/>
    </Routes>
   
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
