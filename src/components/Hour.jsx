import React, { useEffect, useState } from 'react'

export const Hour = () => {
    const [hora, setHora] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <p>{hora.toLocaleTimeString()}</p>
        </div>
    )
}
