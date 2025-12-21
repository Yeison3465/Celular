import React, { useRef, useState } from "react";
import { PhoneLayout } from "../Layout/PhoneLayout";

export const CameraPages = () => {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);
    const [stream, setStream] = useState(null);

    const iniciarCamara = async () => {
        try {
            setError(null);

            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }

            setStream(mediaStream);
        } catch (err) {
            setError("No se pudo acceder a la cámara");
            console.error(err);
        }
    };

    const detenerCamara = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    };

    return (
        <PhoneLayout>
            <div className="flex flex-col items-center gap-4 p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    📷 Cámara
                </h2>

                {error && (
                    <p className="text-red-500 text-sm bg-red-100 px-3 py-1 rounded-md">
                        {error}
                    </p>
                )}

                <div className="relative w-[320px] h-[400px] bg-black rounded-2xl overflow-hidden shadow-lg">
                    {!stream && (
                        <p className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                            Cámara apagada
                        </p>
                    )}

                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                
                <div className="flex gap-3 mt-2">
                    <button
                        onClick={iniciarCamara}
                        disabled={!!stream}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm disabled:opacity-50"
                    >
                        ▶ Activar
                    </button>

                    <button
                        onClick={detenerCamara}
                        disabled={!stream}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm disabled:opacity-50"
                    >
                        ⏹ Desactivar
                    </button>
                </div>
            </div>
        </PhoneLayout>
    );
};
