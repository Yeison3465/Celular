import React, { useState } from "react";
import { PhoneLayout } from "../Layout/PhoneLayout";
import { Contactos as InitialContacts } from "../Data/contacts";

export const Contacts = () => {
    const [Contacts, setContacts] = useState(InitialContacts);
    const [Name, setName] = useState("");
    const [Numero, setNumero] = useState("");
    const [Search, setSearch] = useState("");
    const [Modal, setModal] = useState(false);
    const [Modal2, setModal2] = useState(false)

    const addContact = () => {
        if (Name.trim() !== "" && Numero.trim() !== "") {
            const newContact = {
                nombre: Name,
                numero: Numero,
                imagen: "https://via.placeholder.com/150",
            };
            setContacts([...Contacts, newContact]);
            setModal(false);
            setName("");
            setNumero("");
        }
    };

    const filteredContacts = Contacts.filter((c) =>
        c.nombre.toLowerCase().includes(Search.toLowerCase())
    );

    return (
        <PhoneLayout>

            <div className="flex justify-between items-center px-4 pt-4">
                <h1 className="text-2xl font-bold text-gray-800">Contactos</h1>

                <button
                    className="bg-black text-white px-4 py-2 rounded-xl active:scale-95 transition"
                    onClick={() => setModal(true)}
                >
                    Añadir
                </button>
            </div>


            <div className="px-4 mt-4">
                <input
                    type="text"
                    placeholder="Buscar contacto..."
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/60 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>


            <div className="mt-3 px-4 pb-10">
                {filteredContacts.map((contact, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-white/80 backdrop-blur-xl
                                   rounded-2xl shadow-sm mb-3 border border-gray-200 active:scale-[.98] transition"
                    >
                        <img
                            src={contact.imagen}
                            alt={contact.nombre}
                            className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow"
                        />

                        <div className="flex flex-col ml-4">
                            <p className="text-lg font-semibold text-gray-900">
                                {contact.nombre}
                            </p>
                            <p className="text-sm text-gray-600">
                                {contact.numero}
                            </p>
                        </div>


                        <div className="ml-auto">
                            <button
                                onClick={() => setModal2(true)}
                                className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow hover:bg-green-600 active:scale-95 transition ml-auto"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.36a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                ))}
            </div>


            {Modal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 ">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 animate-fadeIn">
                        <h2 className="text-lg font-bold mb-4 text-gray-800">
                            Nuevo Contacto
                        </h2>

                        <input
                            type="text"
                            placeholder="Nombre"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Número"
                            value={Numero}
                            onChange={(e) => setNumero(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <button
                            className="w-full mt-2 py-3 bg-black text-white rounded-xl font-semibold
                                       hover:bg-neutral-900 active:scale-95 transition"
                            onClick={addContact}
                        >
                            Guardar Contacto
                        </button>

                        <button
                            onClick={() => setModal(false)}
                            className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 active:scale-95 transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            

        </PhoneLayout>
    );
};
