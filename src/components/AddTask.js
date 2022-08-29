import {useState} from "react"


const AddTask = ({showAdd,onAdd}) => {
    const[text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(true)
  

    const submitTask=(e)=>{
e.preventDefault()

if(!text || !day){
    alert("Enter All Fields")
    return
}

onAdd({text,day,reminder})

setText('')
setDay('')
setReminder(true)
    }
  return (
    <form className="add-form" onSubmit={submitTask}>
       
   {showAdd && <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>} 
   {showAdd &&  <div className='form-control'>
        <label>Day& Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
    </div> }
    {showAdd &&  <div className='form-control form-control-check'>
    <label>Set Reminder</label>
    <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
 </div>}
 {showAdd && <div>
    <input type="submit" value="Save Task" className="btn btn-block"/>
 </div>}
    </form>
  
  )
}

export default AddTask
