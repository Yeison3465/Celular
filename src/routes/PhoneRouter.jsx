import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Wallet } from '../pages/Wallet'
import { Menu } from '../pages/Menu'
import { Shop } from '../pages/Shop'
import { Note } from '../pages/Note'
import { Music } from '../pages/Music'
import { Finance } from '../pages/Finance'
import { Wacht } from '../pages/Wacht'
import { DataCall } from '../Data/RegistroCall'
import { CalLog } from '../pages/CalLog'
import { Contacts } from '../pages/contacts'

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
                <Route path="Relog" element={<Wacht/>} />
                <Route path="Llamadas" element={<CalLog/>} />
                <Route path="Conctatos" element={<Contacts/>} />
            </Routes>
        </>
    )
}
