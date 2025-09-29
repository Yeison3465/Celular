
import { Data } from "../Data/ShopData"

export const CardShop = ({ onBuy, onFavorite, searchTerm = "" }) => {
    const productosFiltrados = Data.filter((producto) => producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="grid grid-cols-2 gap-4 px-4 pb-20">
            {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                    <div
                        key={producto.id}
                        className="bg-card rounded-3xl shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border"
                    >
                        <div className="relative group">
                            <img
                                src={producto.imagen || "/placeholder.svg"}
                                alt={producto.nombre}
                                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            
                            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                                Nuevo
                            </span>

                            
                            <button
                                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 group"
                                onClick={() => onFavorite(producto)}
                            >
                                <svg
                                    className="w-4 h-4 text-red-500 group-hover:fill-red-500 transition-all duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4">
                            <h2 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 leading-tight">
                                {producto.nombre}
                            </h2>

                            <div className="flex items-center justify-between mb-3">
                                <p className="text-lg font-bold text-accent">${producto.precio.toLocaleString("es-CO")}</p>
                               
                            </div>

                            <button
                                className="w-full bg-black text-primary-foreground py-3 rounded-2xl text-sm  text-white font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                                onClick={() => onBuy(producto)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-2 text-center py-12">
                    <div className="text-muted-foreground mb-2">
                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">No se encontraron productos</p>
                </div>
            )}
        </div>
    )
}
