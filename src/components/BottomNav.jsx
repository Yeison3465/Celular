
import { useState } from "react"

export const BottomNav = ({ Buy, Favorite, onSum, onRest, onDelete, onDeleteFavorite, counterFavorite, total }) => {
    const [active, setactive] = useState(false)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)
    const [active4, setactive4] = useState(false)

    const action = () => {
        setactive2(false)
        setactive4(true)
    }

    return (
        <nav className="absolute bottom-0 left-0 w-full bg-card/95 backdrop-blur-xl border-t border-border rounded-t-3xl shadow-2xl">
            <div className="flex justify-around items-center py-1 px-2">

                <button
                    className="flex flex-col items-center gap-1 p-3 rounded-2xl hover:bg-secondary/50 transition-all duration-200 group"
                    onClick={() => setactive(true)}
                >
                    <div className="relative">
                        <svg
                            className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        Perfil
                    </span>
                </button>


                <button
                    className="flex flex-col items-center gap-1 p-3 rounded-2xl hover:bg-secondary/50 transition-all duration-200 group relative"
                    onClick={() => setactive2(true)}
                >
                    <div className="relative">
                        <svg
                            className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                            />
                        </svg>
                        {Buy && Buy.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                {Buy.length}
                            </span>
                        )}
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        Carrito
                    </span>
                </button>


                <button
                    className="flex flex-col items-center gap-1 p-3 rounded-2xl hover:bg-secondary/50 transition-all duration-200 group relative"
                    onClick={() => setactive3(true)}
                >
                    <div className="relative">
                        <svg
                            className="w-6 h-6 text-muted-foreground group-hover:text-red-500 transition-colors duration-200"
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
                        {counterFavorite > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                {counterFavorite}
                            </span>
                        )}
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-red-500 transition-colors duration-200">
                        Favoritos
                    </span>
                </button>
            </div>


            {active && (
                <div className="absolute bottom-20 left-4 bg-white right-4 bg-card border border-border rounded-3xl shadow-2xl p-6 z-50 backdrop-blur-xl">
                    <div className="flex items-center justify-between  border-border mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <img
                                    src="images/ImageDefault.jpeg"
                                    alt="Foto de perfil"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-foreground">Yeison Arrieta</h1>
                                <p className="text-sm text-muted-foreground">YeiArri@email.com</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setactive(false)}
                            className="text-muted-foreground hover:text-foreground p-2 rounded-xl hover:bg-secondary/50 transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}


            {active2 && (
                <>

                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setactive2(false)}
                    />

                    <div className="absolute bottom-20 left-4 right-4 max-h-96 bg-white border border-border rounded-3xl shadow-2xl p-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
                        {/* Header */}
                        <div className="flex items-start justify-between border-b border-border pb-4 mb-4">
                            <h1 className="text-lg font-bold text-foreground">Carrito de Compras</h1>
                            <button
                                onClick={() => setactive2(false)}
                                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover:rotate-90"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="max-h-56 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted">
                            {Buy?.length > 0 ? (
                                Buy.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-secondary/30 border border-border rounded-2xl p-4 hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg relative"
                                    >
                                        
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <h2 className="text-sm font-semibold text-foreground mb-1 truncate">
                                                    {product.nombre}
                                                </h2>
                                                <p className="text-accent font-bold">
                                                    ${product.precio?.toLocaleString("es-CO")}
                                                </p>
                                            </div>

                                            <button
                                                className="text-red-500 hover:text-red-400 p-2 rounded-xl hover:bg-red-500/10 transition-all duration-200"
                                                onClick={() => onDelete(product.id)}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        
                                        <div className="flex items-center gap-3 w-fit">
                                            <button
                                                aria-label="Restar producto"
                                                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center transition-all duration-200 font-bold text-sm shadow-md hover:shadow-lg active:scale-95"
                                                onClick={() => onRest(product.id)}
                                            >
                                                −
                                            </button>
                                            <span className="font-semibold text-foreground min-w-[40px] text-center bg-card px-3 py-1.5 rounded-lg border border-border">
                                                {product.cantidad}
                                            </span>
                                            <button
                                                aria-label="Sumar producto"
                                                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center transition-all duration-200 font-bold text-sm shadow-md hover:shadow-lg active:scale-95"
                                                onClick={() => onSum(product.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8">
                                    <svg
                                        className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                                        />
                                    </svg>
                                    <p className="text-muted-foreground text-sm">Tu carrito está vacío</p>
                                </div>
                            )}
                        </div>


                        {Buy?.length > 0 && (
                            <div className="border-t border-border pt-4 sticky bottom-0 bg-card">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold text-foreground">Total:</span>
                                    <span className="text-xl font-bold text-accent">${total}</span>
                                </div>
                                <button
                                    className="w-full py-3 rounded-2xl font-semibold bg-black text-white hover:bg-primary/90 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                                    onClick={action}
                                >
                                    Proceder al Pago
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}



            {active3 && (
                <div className="absolute bottom-20 left-4 right-4 bg-white bg-card border border-border rounded-3xl shadow-2xl p-6 z-50 backdrop-blur-xl max-h-80">
                    <div className="flex items-start justify-between border-b border-border pb-4 mb-4">
                        <h1 className="text-lg font-bold text-foreground">Favoritos ({counterFavorite})</h1>
                        <button
                            onClick={() => setactive3(false)}
                            className="text-muted-foreground hover:text-foreground p-2 rounded-xl hover:bg-secondary/50 transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="max-h-48 overflow-y-auto space-y-3">
                        {Favorite && Favorite.length > 0 ? (
                            Favorite.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-secondary/30 border border-border rounded-2xl p-4 hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h2 className="text-sm font-semibold text-foreground mb-1 truncate">{product.nombre}</h2>
                                            <p className="text-accent font-bold">${product.precio?.toLocaleString("es-CO")}</p>
                                        </div>
                                        <button
                                            className="text-red-500 hover:text-red-400 p-2 rounded-xl hover:bg-red-500/10 transition-all duration-200"
                                            onClick={() => onDeleteFavorite(product.id)}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <svg
                                    className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                <p className="text-muted-foreground text-sm">No tienes favoritos aún</p>
                            </div>
                        )}
                    </div>
                </div>
            )}


            {active4 && (
                <div className="absolute bottom-20 left-4 right-4 bg-card bg-white border border-border rounded-3xl shadow-2xl p-6 z-50 backdrop-blur-xl">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-lg font-bold text-foreground mb-2">¡Pago Realizado!</h1>
                        <p className="text-muted-foreground text-sm mb-6">
                            Gracias por tu compra. Recibirás un email de confirmación pronto.
                        </p>
                        <button
                            onClick={() => setactive4(false)}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-2xl font-semibold transition-all duration-200"
                        >
                            Continuar Comprando
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
