import React from "react";
import { Data } from "../Data/ShopData";

export const CardShop = ({ onBuy, onFavorite }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Data.map((producto) => (
                <div
                    key={producto.id}
                    className="bg-white border rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                >
                    {/* Imagen del producto */}
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-40 object-cover p-2 rounded-xl"
                    />

                    {/* Info del producto */}
                    <div className="p-2 flex flex-col flex-grow">
                        {/* Título del producto */}
                        <h2 className="text-base font-semibold text-gray-900 truncate">
                            {producto.nombre}
                        </h2>

                        {/* Precio + Favorito en la misma fila */}
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-lg font-bold text-blue-600">
                                ${producto.precio.toLocaleString("es-CO")}
                            </p>
                            <button
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                                onClick={() => onFavorite(producto)}
                            >
                                ❤️
                            </button>
                        </div>

                        {/* Botón de compra abajo */}
                        <div className="mt-auto pt-1">
                            <button
                                className="w-full text-base bg-blue-600 text-white py-1 rounded-lg font-semibold hover:bg-blue-700"
                                onClick={() => onBuy(producto)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
