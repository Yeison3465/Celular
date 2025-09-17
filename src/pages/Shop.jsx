import React from "react";
import { PhoneLayout } from "../Layout/PhoneLayout";
import { CardShop } from "../components/CardShop";
import { SearchShop } from "../components/SearchShop";
import { BottomNav } from "../components/BottomNav";

export const Shop = () => {
    return (
        <PhoneLayout>
            <div className="relative h-full flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <SearchShop />
                    <CardShop />
                </div>
                <BottomNav />
            </div>
        </PhoneLayout>
    );
};
