import React from "react";

function UpdateForm(props){
    return(
        <div>
            <div>
                <input
                    type="text"
                    value={props.updateData && props.updateData.title}
                    onChange={props.changeTask}
                />
            </div>

            <div>
                <button onClick={props.updateTask}>Edit</button>
                <button onClick={props.deleteTask}>Delete</button>
            </div>
        </div>
    )
}

export default UpdateForm;