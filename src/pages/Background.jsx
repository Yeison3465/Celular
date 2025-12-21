import { galeria } from "../Data/Galery";
import { useBackground } from "../context/BackgroundContext";
import { PhoneLayout } from "../Layout/PhoneLayout";


export const Background = () => {
    const { setBackground } = useBackground();
    return (
        <PhoneLayout>
            <h2 className="text-lg font-semibold mb-4">🎨 Fondos</h2>

            {galeria.map(item => (
                <div key={item.id} className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">{item.fecha}</p>

                    <div className="grid grid-cols-3 gap-3">
                        {item.fotos.map(foto => (
                            <img
                                key={foto.code}
                                src={foto.src}
                                alt=""
                                onClick={() => setBackground(foto.src)}
                                className="h-24 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </PhoneLayout>
    )
}
