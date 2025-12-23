import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { Contactos } from '../Data/contacts'

export const ChatFriends = () => {
    const { numero } = useParams()
    const contacto = Contactos.find(c => c.numero === numero)

    const [messages, setMessages] = useState([])
    const [text, setText] = useState('')

    if (!contacto) {
        return <h1>Contacto no encontrado</h1>
    }

    const sendMessage = () => {
        if (!text.trim()) return

        setMessages(prev => [
            ...prev,
            {
                id: Date.now(),
                text,
                sender: 'me',
                timestamp: new Date()
            }
        ])

        setText('')
    }

    return (
        <PhoneLayout>
            <div className="flex flex-col h-full">

                
                <div className="flex items-center gap-3 px-4 py-3 bg-white border-b">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        {contacto.nombre.charAt(0)}
                    </div>
                    <div>
                        <h1 className="font-semibold text-base">{contacto.nombre}</h1>
                        <p className="text-xs text-gray-500">en línea</p>
                    </div>
                </div>

                
                <div className="flex-1 px-3 py-4 overflow-y-auto bg-[#efeae2]">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`flex mb-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`px-3 py-2 rounded-2xl max-w-[75%] text-sm shadow
              ${msg.sender === 'me'
                                        ? 'bg-blue-500 text-white rounded-br-sm'
                                        : 'bg-white text-black rounded-bl-sm'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="px-3 py-2 bg-white border-t flex gap-2">
                    <input
                        type="text"
                        placeholder="Mensaje"
                        className="flex-1 px-4 py-2 text-sm rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm active:scale-95 transition"
                    >
                        Enviar
                    </button>
                </div>

            </div>
        </PhoneLayout>

    )
}
