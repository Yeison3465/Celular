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
        <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar en Google..."
                className="border border-gray-300 rounded px-3 py-2 w-64"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Buscar
            </button>
        </form>
    );
};
