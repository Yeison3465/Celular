import React from "react";
import { useState } from "react";

export const BottomNav = ({ Buy, Favorite}) => {

    const [active, setactive] = useState(false);
    const [active2, setactive2] = useState(false);
    const [active3, setactive3] = useState(false);


    return (
        <nav className="absolute bottom-0 left-0 w-full flex justify-around items-center py-3 bg-blue-600 text-white rounded-b-lg shadow-lg">

            <button className="flex flex-col items-center" onClick={() => setactive(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                    fill="#ffffff"
                >
                    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
            </button>


            <button className="flex flex-col items-center" onClick={() => setactive2(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                    fill="#ffffff"
                >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
            </button>


            <button className="flex flex-col items-center" onClick={() => setactive3(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                    fill="#ffffff"
                >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
            </button>

            {
                active && (
                    <div className="absolute bottom-16 w-72 bg-white rounded-2xl shadow-lg p-4 z-50">
                        {/* Encabezado con foto, nombre y botón de cerrar */}
                        <div className="flex items-start justify-between border-b pb-3 mb-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src="images/ImageDefault.jpeg"
                                    alt="Foto de perfil"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h1 className="text-lg font-bold text-gray-900">Yeison Arrieta</h1>
                                    <p className="text-sm text-gray-500">YeiArri@email.com</p>
                                </div>
                            </div>

                            {/* Botón cerrar */}
                            <button
                                onClick={() => setactive(false)}
                                className="text-gray-500 hover:text-red-600 text-xl font-bold"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                )
            }

            {active2 && (
                <div className="absolute bottom-16 w-72 bg-white rounded-2xl shadow-lg p-4 z-50">
                    {/* Header */}
                    <div className="flex items-start justify-between border-b pb-3 mb-3">
                        <h1 className="text-lg font-bold text-gray-900">Carrito</h1>
                        <button
                            onClick={() => setactive2(false)}
                            className="text-gray-500 hover:text-red-600 text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>

                    {/* Lista de productos */}
                    <div className="max-h-64 overflow-y-auto space-y-2">
                        {Buy && Buy.length > 0 ? (
                            Buy.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border rounded-xl shadow-md p-2 flex flex-col hover:shadow-lg transition"
                                >
                                    <h2 className="text-base font-semibold text-gray-900 truncate">
                                        {product.nombre}
                                    </h2>
                                    <p className="text-lg font-bold text-blue-600">
                                        {product.precio?.toLocaleString("es-CO")}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
                        )}
                    </div>
                </div>
            )}

            
            {active3 && (
                <div className="absolute bottom-16 w-72 bg-white rounded-2xl shadow-lg p-4 z-50">
                    {/* Header */}
                    <div className="flex items-start justify-between border-b pb-3 mb-3">
                        <h1 className="text-lg font-bold text-gray-900">Favorito</h1>
                        <button
                            onClick={() => setactive3(false)}
                            className="text-gray-500 hover:text-red-600 text-xl font-bold"
                        >
                            ×
                        </button>
                    </div>

                    {/* Lista de productos */}
                    <div className="max-h-64 overflow-y-auto space-y-2">
                        { Favorite && Favorite.length > 0 ? (
                            Favorite.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border rounded-xl shadow-md p-2 flex flex-col hover:shadow-lg transition"
                                >
                                    <h2 className="text-base font-semibold text-gray-900 truncate">
                                        {product.nombre}
                                    </h2>

                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Tus favorito está vacío</p>
                        )}
                    </div>
                </div>
            )}



        </nav>
    );
};
