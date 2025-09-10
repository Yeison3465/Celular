import React, { useState } from "react";
import { PhoneLayout } from "../Layout/PhoneLayout";

export const Wallet = () => {
    const [value, setValue] = useState(0);
    const [value2, setvalue2] = useState(0)
    const [modal, setModal] = useState(false);
    const [modal2, setmodal2] = useState(false);
    const [history, setHistory] = useState([{
        
    }]);

    const addmoney = () => {
        setValue(value + value);
        setModal(false);
    }

    const deletemoney = () => {
        if (value > 0) {
            setValue(value - value);
        }
        setmodal2(false);
    }


    return (
        <PhoneLayout>
            <div className="p-4 space-y-6">
                
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-700">Bienvenido</h1>
                    <h2 className="text-lg text-gray-500">Yeison De Jesus</h2>
                </div>

                
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6 text-center">
                    <h1 className="text-lg">Monto disponible</h1>
                    <h2 className="text-3xl font-bold mt-2">${value}</h2>
                </div>

                
                <div className="bg-white shadow-md rounded-2xl p-6 space-y-2">
                    <h1 className="text-gray-700 font-semibold">Tarjeta débito</h1>
                    <h2 className="tracking-widest text-lg font-mono">9941 0001 3357 2568</h2>
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>Yeison De Jesus</span>
                        <span>08/45</span>
                    </div>
                </div>

                
                <div className="flex justify-between gap-3">
                    <button
                        onClick={() => setModal(true)}
                        className="flex-1 px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
                    >
                        Agregar
                    </button>
                    <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">
                        Transferir
                    </button>
                    <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600" onClick={() => setmodal2(true)}>
                        Retirar
                    </button>
                </div>

                
                <div className="bg-white rounded-2xl shadow-md p-4">
                    <h1 className="text-lg font-bold mb-3 text-gray-700">Historial</h1>
                    <div className="space-y-3">
                        {history.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-2"
                            >
                                <div>
                                    <h2 className="font-medium">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.date}</p>
                                </div>
                                <span
                                    className={`font-bold ${item.amount < 0 ? "text-red-500" : "text-green-600"
                                        }`}
                                >
                                    {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                
                {modal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
                            <h2 className="text-lg font-bold mb-4">Agregar dinero</h2>
                            <input
                                type="number"
                                placeholder="Ingrese monto"
                                className="border w-full px-3 py-2 mb-4 rounded-lg"
                                onChange={(e) => setValue(Number(e.target.value))}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setModal(false)}
                                    className="px-4 py-2 bg-gray-400 rounded-lg text-white"
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-500 rounded-lg text-white"
                                    onClick={addmoney}
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {modal2 && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
                            <h2 className="text-lg font-bold mb-4">Retirar dinero</h2>
                            <input
                                type="number"
                                placeholder="Ingrese monto"
                                className="border w-full px-3 py-2 mb-4 rounded-lg"
                                onChange={(e) => setValue(Number(e.target.value))}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setmodal2(false)}
                                    className="px-4 py-2 bg-gray-400 rounded-lg text-white"
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-500 rounded-lg text-white"
                                    onClick={deletemoney}
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </PhoneLayout>
    );
};
