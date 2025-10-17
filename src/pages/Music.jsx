import React, { useEffect, useRef, useState } from 'react'
import { PhoneLayout } from '../Layout/PhoneLayout';

export const Music = () => {
    const [playlist, setPlaylist] = useState([]);
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [loop, setLoop] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem("playlist");
        if (saved) {
            setPlaylist(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }, [playlist]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = volume;
        if (isPlaying) {
            audio.play().catch(() => { });
        } else {
            audio.pause();
        }
    }, [isPlaying, index, volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;


        const onLoaded = () => setDuration(audio.duration || 0);
        const onTimeUpdate = () => setProgress(audio.currentTime / audio.duration || 0);
        const onEnded = () => {
            if (loop) {
                audio.currentTime = 0;
                audio.play();
            } else {
                handleNext();
            }
        };


        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("ended", onEnded);


        return () => {
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("ended", onEnded);
        };
    }, [index, loop]);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newSongs = files.map((file) => ({
            id: Date.now() + Math.random(),
            title: file.name.replace(/\.[^.]+$/, ""),
            artist: "Desconocido",
            src: URL.createObjectURL(file),
        }));
        setPlaylist((prev) => [...prev, ...newSongs]);
    };


    const togglePlay = () => setIsPlaying((p) => !p);
    const handlePrev = () => setIndex((i) => (i === 0 ? playlist.length - 1 : i - 1));
    const handleNext = () => setIndex((i) => (i === playlist.length - 1 ? 0 : i + 1));


    const seek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const fraction = Math.max(0, Math.min(1, x / rect.width));
        const audio = audioRef.current;
        if (audio) audio.currentTime = fraction * audio.duration;
    };


    const formatTime = (s = 0) => {
        if (!isFinite(s)) return "0:00";
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60).toString().padStart(2, "0");
        return `${m}:${sec}`;
    };

    return (
        <PhoneLayout>
            <div className="max-w-md mx-auto p-5 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-3xl shadow-xl">
                <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
                    🎶 Mi Reproductor Local
                </h2>

                
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer hover:bg-indigo-50 transition">
                    <span className="text-indigo-600 font-medium text-sm">Haz clic o arrastra tus canciones</span>
                    <input
                        type="file"
                        accept="audio/*"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                </label>

                
                {playlist.length === 0 ? (
                    <div className="text-center text-gray-500 text-sm mt-4">
                        🎵 No hay canciones aún. Sube tus archivos para comenzar.
                    </div>
                ) : (
                    <>
                       
                        <div className="mt-6 bg-white rounded-2xl shadow-sm p-4 border border-indigo-100">
                            <div className="text-center">
                                <div className="text-lg font-semibold text-indigo-700">{playlist[index]?.title}</div>
                                <div className="text-sm text-gray-500">{playlist[index]?.artist}</div>
                            </div>

                            
                            <div
                                className="mt-3 h-2 bg-gray-200 rounded-full cursor-pointer relative"
                                onClick={seek}
                            >
                                <div
                                    className="absolute left-0 top-0 h-2 bg-indigo-500 rounded-full transition-all duration-300"
                                    style={{ width: `${progress * 100}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-600 mt-1">
                                <span>{formatTime(progress * duration)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>

                           
                            <div className="flex justify-center items-center gap-5 mt-4">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 rounded-full hover:bg-indigo-100 text-indigo-600 transition"
                                >
                                    ⏮️
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="p-3 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
                                >
                                    {isPlaying ? "⏸️" : "▶️"}
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full hover:bg-indigo-100 text-indigo-600 transition"
                                >
                                    ⏭️
                                </button>
                            </div>

                            
                            <div className="flex items-center gap-2 mt-5">
                                <span className="text-sm text-gray-700">🔊</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                    className="flex-1 accent-indigo-600"
                                />
                            </div>
                        </div>

                       
                        <audio ref={audioRef} src={playlist[index]?.src} preload="metadata" />

                        
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Tu Playlist</h3>
                            <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                                {playlist.map((song, i) => (
                                    <div
                                        key={song.id}
                                        onClick={() => {
                                            setIndex(i);
                                            setIsPlaying(true);
                                        }}
                                        className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition ${i === index
                                                ? "bg-indigo-100 text-indigo-700"
                                                : "hover:bg-indigo-50 text-gray-700"
                                            }`}
                                    >
                                        <div>
                                            <div className="text-sm font-medium">{song.title}</div>
                                            <div className="text-xs text-gray-500">{song.artist}</div>
                                        </div>
                                        {i === index && <span>🎧</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </PhoneLayout>


    );

}
