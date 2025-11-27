import React, { useEffect, useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';

export const Wacht = () => {
    const [time, settime] = useState(new Date())
    const [wachts, setwachts] = useState([])
    const [newWacht, setnewWacht] = useState("")
    const [isSet, setisSet] = useState(false)
    const [nameclock, setnameclock] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date());
        }, 1000);


        return () => clearInterval(interval);
    }, []);


    const onAddWacht = (wachtime) => {
        setwachts([...wachts, wachtime]);
    }

    const onSet = () => {
        setisSet(true);
    }

    const onDelete = (index) => {
        setwachts(wachts.filter((_, i) => i !== index));
    }



    return (
        <PhoneLayout>

            
            <div className="">
                <div className="p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-md text-center border border-white/40">
                    <h1 className="text-gray-600 text-xs uppercase tracking-widest mb-2">
                        Reloj en tiempo real
                    </h1>
                    <p className="text-6xl font-thin text-gray-900">
                        {time.toLocaleTimeString()}
                    </p>
                </div>
            </div>

            
            <button
                onClick={onSet}
                className="mt-6 w-full py-3 bg-black text-white rounded-xl shadow-md 
                    active:scale-95 transition-all font-semibold tracking-wide
                    hover:bg-neutral-900"
            >
                + Añadir alarma
            </button>

           
            <div className="mt-4 space-y-4">
                {wachts.map((wacht, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm 
                            flex justify-between items-center border border-white/40"
                    >
                        <div>
                            <p className="text-4xl text-gray-900 font-light">{wacht.time}</p>
                            <span className="text-gray-600 text-xs uppercase">
                                Alarma {wacht.nameclock}
                            </span>
                        </div>

                        <button
                            onClick={() => onDelete(index)}
                            className="text-red-500 font-semibold hover:text-red-600 active:scale-90 transition"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>

            
            {isSet && (
                <div className="mt-6 p-5 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40">

                    <input
                        type="time"
                        className="w-full p-3 rounded-xl bg-gray-100 border border-gray-300 
                            focus:ring-2 focus:ring-black focus:outline-none text-xl"
                        value={newWacht}
                        onChange={(e) => setnewWacht(e.target.value)}
                    />

                    <button
                        className="w-full mt-4 py-3 bg-black text-white rounded-xl font-semibold
                            hover:bg-neutral-900 active:scale-95 transition-all"
                        onClick={() => {
                            onAddWacht({
                                time: newWacht,
                                nameclock: wachts.length + 1
                            });
                            setisSet(false);
                            setnewWacht("");
                        }}
                    >
                        Guardar alarma
                    </button>

                    <button
                        onClick={() => setisSet(false)}
                        className="w-full mt-2 py-2 text-gray-500 hover:text-gray-700 active:scale-95 transition"
                    >
                        Cancelar
                    </button>
                </div>
            )}

        </PhoneLayout>

    );
}
