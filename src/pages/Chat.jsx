import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';
import { Contactos } from '../Data/contacts';
import { Link } from 'react-router-dom';

export const Chat = () => {


    return (
        <PhoneLayout>
            {
                Contactos.map((contact) => (
                    <Link to={`/Chats/${contact.numero}`} key={contact.numero} className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-100">
                        <img src={contact.imagen} alt={contact.nombre} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="text-lg font-semibold">{contact.nombre}</p>
                        </div>
                    </Link> 
                ))
            }
        </PhoneLayout>
    )
}
