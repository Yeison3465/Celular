import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Wallet } from '../pages/Wallet'
import { Menu } from '../pages/Menu'
import { Shop } from '../pages/Shop'
import { Note } from '../pages/Note'
import { Music } from '../pages/Music'
import { Finance } from '../pages/Finance'

export const PhoneRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="Billetera" element={<Wallet/>} />
                <Route path="Tienda" element={<Shop/>} />
                <Route path="Tareas" element={<Note/>} />
                <Route path="Musica" element={<Music/>} />
                <Route path="Finanzas" element={<Finance/>} />
                
            </Routes>
        </>
    )
}
