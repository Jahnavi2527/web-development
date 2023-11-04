import React from "react";
import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import TodoForm from "./components/TodoForm";



function TodoContainer(props){

const [Todo , setTodo] = useState(props.jsonTodos)

const [newTask , setNewTask ] = useState("")
const [updateData, setUpdateData] = useState("")

const addTask = ()=>{
    if(newTask){
        let newEntry = {
            id : Date.now(),
            title : newTask,
            completed : false 
        } 
        setTodo([newEntry, ...Todo])
        setNewTask('');
    }
}

const deleteTask = (id)=>{
    let removeItem = Todo. filter(task=>task.id !== id);
    setTodo(removeItem);
}

const markDone = (id)=>{
    let completeTask = Todo.map(task =>{
        if(task.id === id){
            return ({...task, completed :  !task.completed});
        }
        return task;
    })
    setTodo(completeTask)
}

const cancelUpdate = ()=>{
    setUpdateData = ('');
}

const changeTask = (e)=>{
    let newEntry = {
        id:updateData.id,
        title:e.target.value,
        completed: updateData.completed?true:false 
        }
        setUpdateData(newEntry);
}

const updateTask = ()=>{
    let filterRecord = [...Todo].filter(task=>task.id!== updateData.id)
    let updateObject = [updateData, ...filterRecord]
    setTodo(updateObject)
    setUpdateData("");
}

const renderTasks = ()=>{
    return (
        <li>
            {Todo.map((task,index)=>(
                <li key={index}>{task}</li>
            ))}
        </li>
    )
}

const completeTasks = ()=>{
    Todo.filter(task=>task.completed);
    return(
        <li>
            {
            completeTasks.map((task)=>(
            <li key={task.id}>{task.id},{task.title}</li>
            ))}
        </li>
    )
}
    return(
<>
        <div style={{justifyContent:"center"}}>
      
      <button type="button" class="btn btn-outline-success" onClick={()=>renderTasks()}>List All</button> {''}

      <button type="button" class="btn btn-outline-success" onClick={()=>completeTasks()}>Completed Tasks</button>

      </div >

        <div style={{fontsize: '24px', lineheight: '24px',marginbottom:' 16px',alignitems: 'center',border:"20px"}}>
            {
            updateData && updateData ? (
                <UpdateForm
                updateData = {updateData}
                changeTask = {changeTask}
                updateTask = {updateTask}
                cancelUpdate = {cancelUpdate}
                />
            ):(
                <AddTaskForm
                newTask = {newTask}
                setNewTask = {setNewTask}
                addTask = {addTask}               
                />
            )}

            <TodoForm
                Todo = {Todo}
                markDone = {markDone}
                setUpdateData = {setUpdateData}
                deleteTask = {deleteTask}       
            />
        </div>

        </>
    )
}

export default TodoContainer;