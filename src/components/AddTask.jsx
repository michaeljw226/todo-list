import React from 'react';
import { useState } from 'react'

export const AddTask = (props) => {
    const [task,setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {task, completed:false};
        props.addTask(newTask)
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>New Task:</label> 
                <input type="text" name='task' value={task} onChange={(e) =>setTask(e.target.value)}/>
            </div>
            <button onlick={() => props.addTask()} >Add Task</button>
        </form>
    )
}

export default AddTask;