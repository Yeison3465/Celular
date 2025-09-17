import React from 'react'
import { Hour } from '../components/Hour'
import { Camera } from '../components/Camera'
import { Bluetooth } from '../components/icons/Bluetooth'
import { SignalCellular } from '../components/icons/SignalCellular'
import { Wifi } from '../components/icons/Wifi'
import { Battery } from '../components/icons/Battery'
import { Date } from '../components/Date'
import { Temperature } from '../components/Temperature'
import { Aplication } from '../components/Aplication'
import { GoogleSearch } from '../components/GoogleSearch'
import { Button } from '../components/button'
import { PhoneLayout } from '../Layout/PhoneLayout'

export const Menu = () => {

    return (
        <PhoneLayout>

            <div className=' flex  justify-center items-center mt-9  '>
                <Date />
                <Temperature />
            </div>

            <div className='mt-10 '>
                <GoogleSearch />
            </div>

            <div className='grid grid-cols-4 gap-3 mt-12  place-items-center'>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Billera"  to="/Billetera"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Calculadora"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Tienda" to="Tienda"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Instragram" />
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Finanzas"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Tres en raya"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="PPA"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Lista de tareas"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Galeria"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Relog"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Musica"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Chats"/>
            </div>

            <div className='grid grid-cols-5  mt-10'>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Llamadas" />
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Conctatos"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Mensajes"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Camara"/>
                <Aplication color="#ff0000" color2="#00ff00" icon="Apli" name="Cambio de fondo"/>
            </div>

            

        </PhoneLayout>



           
    )
}
