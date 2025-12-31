import React from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'
import { HeaderIg } from '../components/HeaderIg'
import { PublicIg } from '../components/PublicIg'

export const Instagram = () => {
    return (
        <PhoneLayout>
            <HeaderIg/>
            <PublicIg/>
        </PhoneLayout>
    )
}
