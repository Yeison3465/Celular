import React from 'react'
import { Hour } from '../components/Hour'
import { Camera } from '../components/Camera'
import { Bluetooth } from '../components/icons/Bluetooth'
import { SignalCellular } from '../components/icons/SignalCellular'
import { Wifi } from '../components/icons/Wifi'
import { Battery } from '../components/icons/Battery'
import { Button } from '../components/button'

export const PhoneLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-[24rem] h-[46rem] border rounded-lg shadow-lg p-4 flex flex-col">


                <div className='flex justify-between items-center mb-4'>
                    <div><Hour /></div>
                    <div><Camera /></div>
                    <div className='flex justify-between items-center gap-0.5'>
                        <Bluetooth />
                        <SignalCellular />
                        <Wifi />
                        <Battery />
                    </div>
                </div>


                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>


                <div className="flex justify-evenly items-center mt-auto pt-2">
                    <Button
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                            </svg>
                        }
                        classname=" p-4 rounded-full hover:bg-gray-200 active:bg-gray-200 transition transform hover:scale-125 duration-200 "
                    />
                    <Button
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 
            31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 
            54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 
            85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 
            0-227 93t-93 227q0 134 93 227t227 93Z" />
                            </svg>
                        }
                        to="/"
                        classname=" p-4 rounded-full hover:bg-gray-200 active:bg-gray-200 transition transform hover:scale-125 duration-200"
                    />
                    <Button
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        }
                        classname="p-4 rounded-full hover:bg-gray-200 active:bg-gray-200 transition transform hover:scale-125 duration-200"
                    />
                </div>
            </div>
        </div>
    )
}
