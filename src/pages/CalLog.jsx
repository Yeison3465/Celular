import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { DataCall } from '../Data/RegistroCall'

export const CalLog = () => {
    return (
        <PhoneLayout>

            <div className="mt-4">
                {DataCall.map((call, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-xl rounded-xl shadow-sm mb-3 border border-gray-200"
                    >
                        
                        <div className="flex items-center gap-4">
                            <img
                                src={call.imagen}
                                alt={call.nombre}
                                className="w-14 h-14 rounded-full object-cover border border-gray-300"
                            />

                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-gray-900">
                                    {call.nombre}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {call.numero}
                                </p>

                                <p className="text-xs text-gray-400">
                                    {call.duracion}
                                </p>
                            </div>
                        </div>

                        
                        <div className="flex flex-col items-end">

                            
                            {call.tipo === "incoming" && (
                                <span className="text-green-500 text-2xl">📞</span>
                            )}

                            {call.tipo === "outgoing" && (
                                <span className="text-blue-500 text-2xl">📤</span>
                            )}
                            
                            <p className="text-xs text-gray-500 mt-1">
                                {call.fecha}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </PhoneLayout>
    )
}
