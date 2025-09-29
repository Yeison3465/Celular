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
            setBuy(
                Buy.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );
        } else {
            setBuy([...Buy, { ...producto, cantidad: 1 }]);
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

    const onSum = (id) => {
        setBuy(
            Buy.map(item =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
        console.log("Carrito actualizado:", Buy);
    };

    const onRest = (id) => {
        setBuy(
            Buy.map(item =>
                item.id === id && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const onDelete = (id) => {
        setBuy(Buy.filter(item => item.id !== id));
    }

    const onDeleteFavorite = (id) => {
        setFavorite(Favorite.filter(item => item.id !== id));
    }

    const counterFavorite = Favorite.length;
    let total = 0;
    for (const item of Buy) {
        total += item.precio * item.cantidad;
    }
    total = total.toLocaleString("es-CO")
    return (
        <PhoneLayout>
            <div className="relative h-full flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="py-4">
                        <SearchShop onSearch={setSearchTerm} />
                    </div>
                    <CardShop onBuy={handleBuy} onFavorite={handleFavorite} searchTerm={searchTerm} />
                </div>
                <BottomNav Buy={Buy} Favorite={Favorite} onSum={onSum} onRest={onRest} onDelete={onDelete} onDeleteFavorite={onDeleteFavorite} counterFavorite={counterFavorite} total={total}/>

            </div>
        </PhoneLayout>
    );

    // cosa por hacer 
    // 2. mejorar el diseño de la tienda
    
};
