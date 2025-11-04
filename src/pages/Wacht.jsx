import React, { useEffect, useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';

export const Wacht = () => {
    const [time, settime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date());
        }, 1000);


        return () => clearInterval(interval);
    }, []);


    return (
        <PhoneLayout>

            <div className="">
                <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center">
                    <h1 className="text-gray-700 text-sm uppercase tracking-widest mb-3">
                        Reloj en tiempo real
                    </h1>
                    <p className="text-6xl font-light text-gray-900 transition-all duration-300">
                        {time.toLocaleTimeString()}
                    </p>
                </div>
            </div>
            
            <button>añadir alarma</button>

            <div>
                
            </div>
            <input type="time" name="" id="" />




        </PhoneLayout>
    );
}
