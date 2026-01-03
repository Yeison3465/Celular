import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { Contactos } from '../Data/contacts'
import { Link } from 'react-router-dom'

export const Chat = () => {
    return (
        <PhoneLayout>
            
            <div className="px-4 py-3 bg-white">
                <h1 className="text-2xl font-bold">Chats</h1>
            </div>

            

           
            <div className="mt-2">
                {Contactos.map((contact) => (
                    <Link
                        to={`/Chats/${contact.numero}`}
                        key={contact.numero}
                        className="flex items-center px-4 py-3 hover:bg-gray-100 transition rounded-xl mx-2"
                    >
                       
                        <div className="relative">
                            <img
                                src={contact.imagen}
                                alt={contact.nombre}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            
                            {contact.activo && (
                                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                            )}
                        </div>

                       
                        <div className="ml-4 flex-1">
                            <p className="font-semibold text-gray-900">
                                {contact.nombre}
                            </p>

                            <p
                                className={`text-sm truncate max-w-[220px] ${contact.noLeidos
                                        ? 'text-blue-600 font-medium'
                                        : 'text-gray-500'
                                    }`}
                            >
                                {contact.ultimoMensaje || 'Sin mensajes nuevos'}
                            </p>
                        </div>

                        
                        {contact.noLeidos && (
                            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                        )}
                    </Link>
                ))}
            </div>
        </PhoneLayout>
    )
}
