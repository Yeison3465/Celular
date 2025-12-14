import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';
import { useParams } from 'react-router-dom';
import { mensajes } from '../Data/message';

export const MessageDetail = () => {

    const { id } = useParams();
    const message = mensajes.find(msg => msg.id === parseInt(id));

    if (!message) {
        return <div>Mensaje no encontrado</div>;
    }

    return (
        <PhoneLayout>
            <div className="flex flex-col h-full bg-gray-100">

                {/* HEADER */}
                <div className="flex items-center gap-3 p-4 bg-white border-b">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {message.tipo.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-900">
                            {message.tipo.toUpperCase()}
                        </p>
                        <p className="text-xs text-gray-500">
                            Código #{message.codigo}
                        </p>
                    </div>
                </div>

                {/* MENSAJE */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="max-w-xs ml-auto bg-blue-600 text-white p-3 rounded-2xl rounded-br-sm shadow">
                        <p className="text-sm leading-relaxed">
                            {message.contenido}
                        </p>

                        <p className="text-[11px] text-blue-200 text-right mt-2">
                            {new Date(message.fechaEnvio).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    </div>
                </div>

                

            </div>
        </PhoneLayout>

    )
}
