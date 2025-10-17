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
            <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-3">🎶 Reproductor de Música Local</h2>


                <input
                    type="file"
                    accept="audio/*"
                    multiple
                    onChange={handleFileUpload}
                    className="mb-3 w-full text-sm"
                />


                {playlist.length === 0 ? (
                    <div className="text-gray-500 text-sm">Sube canciones para comenzar.</div>
                ) : (
                    <>
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="font-semibold">{playlist[index]?.title}</div>
                                <div className="text-sm text-gray-500">{playlist[index]?.artist}</div>
                                <div className="mt-2 h-2 bg-gray-200 rounded-full cursor-pointer relative" onClick={seek}>
                                    <div
                                        className="absolute left-0 top-0 h-2 bg-indigo-500 rounded-full"
                                        style={{ width: `${progress * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span>{formatTime(progress * duration)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center gap-3 mt-4">
                            <button onClick={handlePrev} className="px-3 py-1 rounded hover:bg-gray-100">⏮️</button>
                            <button onClick={togglePlay} className="px-4 py-2 rounded-full bg-indigo-600 text-white">
                                {isPlaying ? "⏸️" : "▶️"}
                            </button>
                            <button onClick={handleNext} className="px-3 py-1 rounded hover:bg-gray-100">⏭️</button>
                        </div>


                        <div className="flex items-center gap-2 mt-4">
                            <label className="text-sm">Vol</label>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="flex-1"
                            />
                        </div>


                        <audio ref={audioRef} src={playlist[index]?.src} preload="metadata" />


                        <div className="mt-5">
                            <div className="text-sm font-medium mb-1">Tu Playlist</div>
                            <div className="max-h-56 overflow-y-auto space-y-2">
                                {playlist.map((song, i) => (
                                    <div
                                        key={song.id}
                                        className={`p-2 rounded cursor-pointer ${i === index ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                                        onClick={() => { setIndex(i); setIsPlaying(true); }}
                                    >
                                        <div className="text-sm">{song.title}</div>
                                        <div className="text-xs text-gray-500">{song.artist}</div>
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
