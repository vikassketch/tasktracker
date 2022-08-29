import Task from "./Task"


const Tasks = ({length,tasks,onDelete,onDoubleClick}) => {

  return (
    <>
    {length>0?<div>
      {tasks.map((task)=><Task key={task.id}  task={task} onDelete={onDelete} onDoubleClick={onDoubleClick}/>)}
    </div>:'No Tasks to Show.'}
      
    </>
  )
}

export default Tasks
