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
import { Contacts } from '../pages/Contacts'
import { Message } from '../pages/Message'
import { MessageDetail } from '../pages/MessageDetail'
import { Galery } from '../pages/Galery'
import { Photo } from '../pages/Photo'
import { Camera } from '../components/Camera'
import { CameraPages } from '../pages/CameraPages'
import { Background } from '../pages/Background'
import { Calculator } from '../pages/Calculator'
import { Chat } from '../pages/Chat'
import { ChatFriends } from '../pages/ChatFriends'
import { Instagram } from '../pages/Instagram'
import { StoryIg } from '../pages/StoryIg'

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
                <Route path="Mensajes" element={<Message/>} />
                <Route path="Mensajes/:id" element={<MessageDetail/>} />
                <Route path="Galeria" element={<Galery/>} />
                <Route path='Galeria/:code' element={<Photo/>} />
                <Route path='Camara' element={<CameraPages/>} />
                <Route path='Fondos' element={<Background/>} />
                <Route path='Calculadora' element={<Calculator/>} />
                <Route path='Chats' element={<Chat/>} />
                <Route path='Chats/:numero' element={<ChatFriends/>} />
                <Route path='Instagram' element={<Instagram/>} />
                <Route path='Instagram/stories/:id' element={<StoryIg/>} />
            </Routes>
        </>
    )
}
