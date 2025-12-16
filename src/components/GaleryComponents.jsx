import React from 'react'
import { galeria } from '../Data/Galery'
import { Link } from 'react-router-dom'

export const GaleryComponents = () => {

    return (
        <div>
            {galeria.map((item) => (
                <div key={item.id} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        {item.fecha}
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                        {item.fotos.map((foto) => (
                            <Link className='' to={`/Galeria/${foto.code}`} key={foto.code} >
                                <div
                                    key={foto.code}
                                    className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                                >
                                    <img
                                        src={foto.src}
                                        alt={`Foto ${foto.code}`}
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                            
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}
