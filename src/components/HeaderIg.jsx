import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { instagramStories } from '../Data/instagramStories'

export const HeaderIg = () => {

    const [ig, setIg] = useState(instagramStories)
    const [mondal, setMondal] = useState(false)
    const [imagen, setImagen] = useState(null)

    const usuarioActual = ig[ig.length - 1]

    const agregarHistoria = () => {
        if (!imagen) return

        const nuevaHistoria = {
            code: `ST${Date.now()}`,
            url: URL.createObjectURL(imagen),
            duracion: 5,
            fecha: new Date().toISOString(),
            vistas: 0
        }

        setIg(prev =>
            prev.map(user =>
                user.id === usuarioActual.id
                    ? { ...user, historias: [...user.historias, nuevaHistoria] }
                    : user
            )
        )

        console.log(nuevaHistoria);

        setImagen(null)
        setMondal(false)
    }

    return (
        <div className="w-full bg-white">

            <div className="flex items-center justify-between px-4 py-3 border-b">
                <h1 className="text-xl font-semibold">Instagram</h1>
            </div>

            <div className="flex gap-4 px-4 py-3 overflow-x-auto scrollbar-hide">


                {ig.map(item => (
                    item.historias.length > 0 && (
                        <Link
                            key={item.id}
                            to={`/instagram/stories/${item.usuario.id}`}
                            className="flex flex-col items-center min-w-[64px]"
                        >
                            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                                <div className="bg-white p-[2px] rounded-full">
                                    <img
                                        src={item.usuario.avatar}
                                        alt={item.usuario.username}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <p className="text-xs mt-1 truncate w-16 text-center">
                                {item.usuario.username}
                            </p>
                        </Link>
                    )
                ))}
            </div>

           
        </div>
    )
}
