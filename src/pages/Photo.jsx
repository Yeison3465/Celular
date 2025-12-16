import React from 'react'
import { useParams } from 'react-router-dom'
import { galeria } from '../Data/Galery'
import { PhoneLayout } from '../Layout/PhoneLayout';
export const Photo = () => {

    const { code } = useParams();

    const foto = galeria
        .flatMap(item => item.fotos)
        .find(f => f.code === code);

    if (!foto) {
        return <div>foto no encontrada</div>;
    }

    return (
        <PhoneLayout>
            <img
                src={`/${foto.src}`}
                alt={foto.code}
                className="w-full h-full rounded-xl"
            />
        </PhoneLayout>
    );
}
