import React, { useState } from "react";

export const Date = () => {
    const [date, setDate] = useState(new window.Date());

    
    return (
        <div className="text-center">
            
            <p className="text-lg font-medium text-gray-500 capitalize">
                {date.toLocaleDateString("es-ES", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            
            
        </div>
    );
};
