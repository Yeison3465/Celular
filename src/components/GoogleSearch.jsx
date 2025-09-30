import React, { useState } from "react";

export const GoogleSearch = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md"
        >
            
            <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>

            
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en Google..."
                className="flex-1 bg-transparent focus:outline-none text-gray-700 text-sm"
            />

            
            <button
                type="submit"
                className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm transition"
            >
                Buscar
            </button>
        </form>

    );
};
