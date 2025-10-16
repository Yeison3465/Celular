import React, { useState } from 'react'

export const NoteToDo = ({ task, onSend, onDelete, onToggle }) => {
    const [inputValue, setInputValue] = useState("")

    const handleAdd = () => {
        onSend(inputValue)
        setInputValue("") // limpia el input después de agregar
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto space-y-3 px-3 py-2">
                {task?.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10 italic">
                        No hay tareas aún 📝
                    </p>
                ) : (
                    task.map((tarea, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm transition-all duration-200
          ${tarea.completed
                                    ? 'bg-green-50 border border-green-200 scale-[0.98]'
                                    : 'bg-white hover:shadow-md border border-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-green-500 cursor-pointer"
                                    checked={tarea.completed}
                                    onChange={() => onToggle(tarea)}
                                />
                                <span
                                    className={`text-gray-800 text-base transition-all duration-200 ${tarea.completed
                                            ? 'line-through text-gray-400'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {tarea.text}
                                </span>
                            </div>

                            <button
                                className="text-gray-400 hover:text-red-500 transition-all duration-200 text-lg"
                                onClick={() => onDelete(tarea)}
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Input para nueva tarea */}
            <div className="mt-auto flex items-center gap-2 p-3 border-t border-gray-200 bg-white/80 backdrop-blur-sm sticky bottom-0">
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-600 active:scale-95 transition-all shadow-sm"
                >
                    +
                </button>
            </div>
        </>
    )
}
