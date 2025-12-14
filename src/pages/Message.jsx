import React, { useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { mensajes } from '../Data/message'
import { ListMenssage } from '../components/ListMenssage'
export const Message = () => {

    return (
        <PhoneLayout>
            <h1 className='text-center'>Mensajes</h1>
            <ListMenssage/>
        </PhoneLayout>
    )
}
