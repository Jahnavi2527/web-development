import React from "react";

;function AddTaskForm(props){
    return(
        <form style={{ display: "flex", justifycontent: "space-between",marginbottom: "30px"}}>
            <div style={{padding: "5px 10px"}}>
                <input
                    type="text"
                    value={props.newTask}
                    onChange={(e)=>props.setNewTask(e.target.value)}
                />
            </div>

            <div className="Add-btn">

            <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={props.addTask}>
                Add
            </button>

            </div>
        </form>
    )
}

export default AddTaskForm;