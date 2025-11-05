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
                <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center">
                    <h1 className="text-gray-700 text-sm uppercase tracking-widest mb-3">
                        Reloj en tiempo real
                    </h1>
                    <p className="text-6xl font-light text-gray-900 transition-all duration-300">
                        {time.toLocaleTimeString()}
                    </p>
                </div>
            </div>
            
            <button onClick={onSet}>añadir alarma</button>

            <div>
                {
                    wachts.map((wacht, index) => (
                        <div key={index} className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center mt-4">
                            <h2 className="text-gray-700 text-sm uppercase tracking-widest mb-2">
                                alarma numero {wacht.nameclock}
                            </h2>
                            <p className="text-4xl font-light text-gray-900">
                                {wacht.time}
                            </p>
                            <button onClick={() => onDelete(index)}>eliminar</button>
                        </div>
                    ))
                }
            </div>
            

            {
                isSet && (
                    <div className="mt-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
                        <input type="time"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            value={newWacht}
                            onChange={(e) => setnewWacht(e.target.value)}
                        />
                        
                        <button
                            className="w-full bg-blue-600 text-white p-2 rounded-lg"
                            onClick={() => {
                                onAddWacht({ time: newWacht, nameclock: nameclock.length + 1 });
                                setisSet(false);
                                setnewWacht("");
                                setnameclock("");
                            }}
                        >
                            Guardar Alarma  
                        </button>
                        <button onClick={()=>setisSet(false) }>
                            cancelar
                        </button>
                    </div> 
                    
                )
            }




        </PhoneLayout>
    );
}
