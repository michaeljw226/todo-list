import React, { useState } from 'react'
import AddTask from '../components/AddTask';
import ListDisplay from '../components/ListDisplay';


const ListContainer = () => {
    const [todoList, setTodoList] = useState([]);

    // addTask
    const addTask = (newTask) => {
        setTodoList([...todoList, newTask])
    }
    // deleteTask
    const deleteTask = (targetIdx) => {
        const removeTask = todoList.filter(
            (eachTask, idx) => targetIdx !== idx)

        setTodoList(removeTask);
    }
    // updateTask
    const updateTask = (targetIdx, targetBool) => {
        const updatedTask = todoList.map(
            (eachTask, idx) => {
                if(targetIdx === idx) {
                    return { ...eachTask, completed: targetBool}
                } else {
                    return eachTask
                }
            }
        )
        setTodoList(updatedTask);
    }


    return (
        <>
            <h2>Your To-Do List</h2>
            < AddTask addTask={addTask}/>
            < ListDisplay todoList={todoList} deleteTask={deleteTask} updateTask={updateTask}/>
        </>
    )
}

export default ListContainer