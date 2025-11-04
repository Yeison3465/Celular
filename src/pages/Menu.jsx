// Menu.jsx
import React from 'react'
import { Date } from '../components/Date'
import { Temperature } from '../components/Temperature'
import { Aplication } from '../components/Aplication'
import { GoogleSearch } from '../components/GoogleSearch'
import { PhoneLayout } from '../Layout/PhoneLayout'

export const Menu = () => {
    return (
        <PhoneLayout>
            
            <div className="flex justify-center items-center mt-6 space-x-4">
                <Date />
                <Temperature />
            </div>

            
            <div className="mt-8 px-4">
                <GoogleSearch />
            </div>

            
            <div className="grid grid-cols-4 gap-6 mt-10 place-items-center px-4">
                <Aplication color="#4A90E2" color2="#357ABD" icon="💳" name="Billetera" to="Billetera" />
                <Aplication color="#7B61FF" color2="#5A3FC0" icon="🧮" name="Calculadora" />
                <Aplication color="#FF6F61" color2="#E55748" icon="🛒" name="Tienda" to="Tienda" />
                <Aplication color="#F56040" color2="#C13584" icon="📷" name="Instagram" />
                <Aplication color="#2ECC71" color2="#27AE60" icon="💰" name="Finanzas" to="Finanzas" />
                <Aplication color="#F1C40F" color2="#D4AC0D" icon="⭕" name="Tres en raya" />
                <Aplication color="#9B59B6" color2="#8E44AD" icon="📊" name="PPA" />
                <Aplication color="#34495E" color2="#2C3E50" icon="📝" name="Lista" to="Tareas" />
                <Aplication color="#E67E22" color2="#CA6F1E" icon="🖼️" name="Galería" />
                <Aplication color="#1ABC9C" color2="#16A085" icon="⏰" name="Reloj" />
                <Aplication color="#FF4081" color2="#E91E63" icon="🎵" name="Música" to="Musica" />
                <Aplication color="#00BCD4" color2="#0097A7" icon="💬" name="Chats" />
            </div>

            
            <div className="grid grid-cols-5 gap-4 mt-10 px-6">
                <Aplication color="#4CAF50" color2="#388E3C" icon="📞" name="Llamadas" />
                <Aplication color="#3F51B5" color2="#303F9F" icon="👥" name="Contactos" />
                <Aplication color="#FF9800" color2="#F57C00" icon="✉️" name="Mensajes" />
                <Aplication color="#9C27B0" color2="#7B1FA2" icon="📷" name="Cámara" />
                <Aplication color="#607D8B" color2="#455A64" icon="🎨" name="Fondos" />
            </div>
        </PhoneLayout>
    )
}
