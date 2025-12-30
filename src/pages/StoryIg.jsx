import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { instagramStories } from '../Data/instagramStories'
import { PhoneLayout } from '../Layout/PhoneLayout'

export const StoryIg = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const usuario = instagramStories.find(
        item => item.usuario.id.toString() === id
    )

    const [indexHistoria, setIndexHistoria] = useState(0)

    if (!usuario) {
        return <div>Historia no encontrada</div>
    }

    const historiaActual = usuario.historias[indexHistoria]

    const siguienteHistoria = () => {
        if (indexHistoria < usuario.historias.length - 1) {
            setIndexHistoria(indexHistoria + 1)
        } else {
            navigate(-1)
        }
    }

    if (!historiaActual) {
        return (
            <PhoneLayout>
                <div>Historia no encontrada</div>
            </PhoneLayout>
        )
    }

    return (
        <PhoneLayout>
            <div className="relative w-full h-full bg-black text-white">
                <div className="absolute top-0 left-0 w-full flex items-center gap-3 p-3 z-20">
                    <img
                        src={usuario.usuario.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <h1 className="text-sm font-semibold">
                        {usuario.usuario.username}
                    </h1>

                    <p>Historia {indexHistoria + 1} de {usuario.historias.length}</p>
                </div>
                <img
                    src={historiaActual.url}
                    alt="historia"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    onClick={siguienteHistoria}
                />
            </div>
        </PhoneLayout>
    )
}
