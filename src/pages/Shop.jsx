import React, { useState } from "react";
import { PhoneLayout } from "../Layout/PhoneLayout";
import { CardShop } from "../components/CardShop";
import { SearchShop } from "../components/SearchShop";
import { BottomNav } from "../components/BottomNav";

export const Shop = () => {
    const [Buy, setBuy] = useState([])
    const [Favorite, setFavorite] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleBuy = (producto) => {
        if (Buy.some(item => item.id === producto.id)) {
            console.log("Este producto ya está en el carrito");
        } else {
            setBuy([...Buy, producto]);
            console.log("Producto añadido al carrito:", producto);
        }
    };

    const handleFavorite = (producto) => {
        if (Favorite.some(item => item.id === producto.id)) {
            console.log("Este producto ya está en favoritos");
        } else {
            setFavorite([...Favorite, producto]);
            console.log("Producto añadido a favoritos:", producto);
        }
    }

    return (
        <PhoneLayout>
            <div className="relative h-full flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="py-4">
                        <SearchShop onSearch={setSearchTerm} />
                    </div>
                    <CardShop onBuy={handleBuy} onFavorite={handleFavorite} searchTerm={searchTerm} />
                </div>
                <BottomNav Buy={Buy} Favorite={Favorite} />

            </div>
        </PhoneLayout>
    );

    // cosa por hacer 
    // 1. agregar funcionalidad de eliminar productos del carrito y favoritos
    // 2. mejorar el diseño de la tienda
    // 3. poner un contador de productos en el carrito 
    // 4. Hacer que se muestre el total a pagar en el carrito
    // 5. Contador de cuantos productos hay en favoritos
    // 6. Ventana de compra hecha
};
