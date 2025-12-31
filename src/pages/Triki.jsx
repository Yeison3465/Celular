import React, { useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout'

export const Triki = () => {
    const [tablero, setTablero] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState('X')
    const [ganador, setGanador] = useState(null)

    const verificarGanador = (tab) => {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        for (let [a, b, c] of combos) {
            if (tab[a] && tab[a] === tab[b] && tab[a] === tab[c]) {
                return tab[a]
            }
        }
        return null
    }

    const jugar = (index) => {
        if (tablero[index] || ganador) return

        const nuevoTablero = [...tablero]
        nuevoTablero[index] = turno

        const g = verificarGanador(nuevoTablero)

        setTablero(nuevoTablero)
        setGanador(g)
        setTurno(turno === 'X' ? 'O' : 'X')
    }

    const reiniciar = () => {
        setTablero(Array(9).fill(null))
        setTurno('X')
        setGanador(null)
    }

    return (
        <PhoneLayout>
            <div className="flex flex-col items-center justify-center h-full p-4">
                <h1 className="text-xl font-bold mb-4">Triki</h1>

                <div className="grid grid-cols-3 gap-2">
                    {tablero.map((valor, i) => (
                        <button
                            key={i}
                            onClick={() => jugar(i)}
                            className="w-20 h-20 text-3xl font-bold bg-gray-100 rounded-lg active:bg-gray-200 border border-gray-700 flex items-center justify-center"
                        >
                            {valor}
                        </button>
                    ))}
                </div>

                <div className="mt-4 text-lg font-semibold">
                    {ganador
                        ? `Ganó ${ganador}`
                        : `Turno: ${turno}`}
                </div>

                <button
                    onClick={reiniciar}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
                >
                    Reiniciar
                </button>
            </div>
        </PhoneLayout>
    )
}
