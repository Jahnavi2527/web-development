import React from "react";
function TodoForm(props){

  return(
    <>
    {
      props.Todo.map((task,index)=>{
        return(
          <React.Fragment key = {task.id}>
      
            <div style={{display:"block"}}>

              <div className={task.completed?'done':''}>
                  <span className="taskNumber">{index+1}</span> {'. '} 
                  <span className="taskText">{task.title}</span>
              </div>

              <div style={{}}>
                <input title="completed/not Completed" 
                        type="checkbox" checked={task.completed}
                      onClick={()=>props.markDone(task.id)}/>

                  <div style={{display:"flex", justifyContent:'inherit'}}>
                    {
                      task.completed?null:(
                        <span title="edit" 
                          onClick={()=>props.setUpdateData({
                              id : task.id,
                              title : task.title,
                              completed : task.completed?true:false
                            }
                            )}>
                            <button class="btn btn-primary">Edit</button> 
                        </span> 
                    )}

                        <span title="delete" 
                              onClick={()=>props.deleteTask(task.id)}>
                              <button class="btn btn-danger">Delete</button>
                        </span>
                  </div>
              </div>
          </div>
        </React.Fragment>
      )
    })
  }
  </>
    )
}

export default TodoForm;