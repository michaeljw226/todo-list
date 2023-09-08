import React from 'react'

const ListDisplay = (props) => {

    const handleDelete = (targetIdx) => {
        props.deleteTask(targetIdx)
    }
    const handleUpdate = (targetIdx, targetBool) => {
        props.updateTask(targetIdx, targetBool)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todoList.map(
                        (eachTask, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{eachTask.task}</td>
                                    <td>
                                        <input type="checkbox" onChange={(e) => handleUpdate(idx, e.target.checked)} />
                                    </td>
                                    <td><button onClick={() => handleDelete(idx)}>Delete</button></td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>

    )
}

export default ListDisplay