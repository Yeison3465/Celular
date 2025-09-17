import React from "react";

export const SearchShop = ({ onSearch }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex items-center bg-gray-100 rounded-full shadow-sm px-4 py-2">
                {/* Icono lupa */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#6b7280"
                    className="mr-2"
                >
                    <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 
          75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 
          69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 
          0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                    />
                </svg>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                />
            </div>
        </div>
    );
};
