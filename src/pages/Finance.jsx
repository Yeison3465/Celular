import React, { useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'

export const Finance = () => {
    const [records, setRecords] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("ingreso");
    const [recordDate, setRecordDate] = useState("");
    const [modal, setModal] = useState(false);

    const addRecord = () => {
        if (title.trim() !== "" && parseFloat(amount) > 0 && recordDate.trim() !== "") {
            const newRecord = {
                id: Date.now(),
                title: title,
                amount: parseFloat(amount),
                type: type,
                date: recordDate
            };

            setRecords([...records, newRecord]);


            setTitle("");
            setAmount("");
            setType("ingreso");
            setRecordDate("");

            console.log("Registro añadido:", newRecord);


            setModal(false);
        } else {
            alert("Por favor completa todos los campos correctamente");
        }
    };

    const deleteRecord = (id) => {
        setRecords(records.filter(record => record.id !== id));
    };

    return (
        <PhoneLayout>
            <div className="p-4">
                {/* Encabezado */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-gray-800">💰 Registros Financieros</h1>
                    <button
                        onClick={() => setModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        + Añadir Registro
                    </button>
                </div>

                {/* Lista de registros */}
                <div className="space-y-3">
                    {records.length === 0 ? (
                        <p className="text-gray-500 text-center py-10">
                            No hay registros aún 📭
                        </p>
                    ) : (
                        records.map((rec) => (
                            <div
                                key={rec.id}
                                className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center border border-gray-200"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {rec.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">{rec.date}</p>
                                    <p
                                        className={`font-bold mt-1 ${rec.type === "ingreso" ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {rec.type === "ingreso" ? "+" : "-"}$
                                        {rec.amount.toLocaleString()}
                                    </p>
                                </div>

                                <button
                                    onClick={() => deleteRecord(rec.id)}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 animate-fadeIn">
                        <h2 className="text-lg font-bold mb-4 text-gray-800">
                            Nuevo Registro
                        </h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Título"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="number"
                                placeholder="Cantidad"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="ingreso">Ingreso</option>
                                <option value="gasto">Gasto</option>
                            </select>
                            <input
                                type="date"
                                value={recordDate}
                                onChange={(e) => setRecordDate(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button
                                onClick={addRecord}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Guardar
                            </button>
                            <button
                                onClick={() => setModal(false)}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PhoneLayout>
    );

};
