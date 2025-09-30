import React from 'react'
import { WiDaySunny } from "react-icons/wi";
export const Temperature = () => {
    return (
        <div className="flex items-center space-x-1 text-gray-200">
            <WiDaySunny className="text-yellow-400 text-3xl" />
            <span className="text-lg font-medium text-gray-500">25°C</span>
        </div>
    )
}
