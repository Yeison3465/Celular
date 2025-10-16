import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { NoteToDo } from '../components/NoteToDo'
import { useState } from 'react'

export const Note = () => {
    const [Tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task.trim() !== "") {
            const newQuery = { text: task, completed: false }
            setTasks([...Tasks, newQuery])
        }
    }
    const deleteTask = (index) => {
        const newTasks = [...Tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const toggleTask = (taskToToggle) => {
        setTasks(
            Tasks.map(t =>
                t.text === taskToToggle.text
                    ? { ...t, completed: !t.completed }
                    : t
            )
        )
    }


    return (
        <PhoneLayout>
            <div className="flex flex-col h-full">

                <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                    Mis Tareas
                </h2>
                <NoteToDo task={Tasks} onSend={addTask} onDelete={deleteTask} onToggle={toggleTask} />


            </div>
        </PhoneLayout>
    )
}
