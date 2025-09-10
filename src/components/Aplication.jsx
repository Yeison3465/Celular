import React from 'react';
import { Link } from 'react-router-dom';

export const Aplication = ({ icon, color, color2, name, to }) => {
    return (
        <Link
            to={to}
            className="flex flex-col items-center space-y-2"
        >
            <button
                style={{ backgroundColor: color }}
                className="w-12 h-12 rounded-lg flex items-center justify-center transition duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color2)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
            >
                {icon}
            </button>
            <p className='text-center text-[12px] font-medium leading-tight h-8 flex items-center justify-center'>
                {name}
            </p>
        </Link>
    );
};
