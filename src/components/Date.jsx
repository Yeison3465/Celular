import React, { useState, useEffect } from "react";

export const Date = () => {
    const [date, setDate] = useState(new window.Date());

    return (
        <div>
            <h1>
                {date.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </h1>
            
        </div>
    );
};
