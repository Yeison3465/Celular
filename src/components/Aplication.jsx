// Aplication.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Aplication = ({ icon, color, color2, name, to }) => {
    const content = (
        <div className="flex flex-col items-center space-y-2 group">
            <button
                style={{ background: `linear-gradient(135deg, ${color}, ${color2})` }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white shadow-md transition transform group-hover:scale-110 group-active:scale-95">
                {icon}
            </button>
            <p className="text-center text-[11px] font-medium text-black leading-tight truncate w-14">
                {name}
            </p>
        </div>
    );

    return to ? <Link to={to}>{content}</Link> : content;
};
