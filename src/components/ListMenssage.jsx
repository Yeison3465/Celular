import React from 'react'
import { mensajes } from '../Data/message'
import { Link } from 'react-router-dom'
export const ListMenssage = () => {
    return (
        <>
            {
                mensajes.map((msg) => (
                    <Link
                        key={msg.id}
                        to={`/Mensajes/${msg.id}`}
                        className="block"
                    >
                        <div className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-100 active:bg-gray-200 transition">

                           
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {msg.tipo.charAt(0).toUpperCase()}
                            </div>

                           
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        {msg.tipo.toUpperCase()}
                                    </h3>

                                    <span className="text-xs text-gray-400">
                                        {new Date(msg.fechaEnvio).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 truncate">
                                    {msg.contenido}
                                </p>
                            </div>
                        </div>
                    </Link>

                ))
            }

        </>
    )
}
