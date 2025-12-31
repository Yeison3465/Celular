import React, { useState } from 'react'
import { instagramPosts } from '../Data/PublicsIg'
import { Heart, MessageCircle, Bookmark } from "lucide-react";

export const PublicIg = () => {
    const [posts, setPosts] = useState(instagramPosts)

    const toggleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? {
                    ...post,
                    leGustaUsuario: !post.leGustaUsuario,
                    likes: post.leGustaUsuario ? post.likes - 1 : post.likes + 1
                }
                : post
        ))
    }

    const toggleSave = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? {
                    ...post,
                    guardados: post.guardadosActivo
                        ? post.guardados - 1
                        : post.guardados + 1,
                    guardadosActivo: !post.guardadosActivo
                }
                : post
        ))
    }

    return (
        <div className="max-w-md mx-auto space-y-6">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-md"
                >
                    <div className="flex items-center gap-3 p-3">
                        <img
                            src={post.usuario.avatar}
                            alt={post.usuario.username}
                            className="w-9 h-9 rounded-full object-cover"
                        />
                        <span className="font-semibold text-sm">
                            {post.usuario.username}
                        </span>
                    </div>

                    <div className="w-full">
                        <img
                            src={post.media[0].url}
                            alt="post"
                            className="w-full object-cover"
                        />
                    </div>

                    <div className="flex justify-between px-3 py-2">
                        <div className="flex gap-4">
                            <Heart
                                onClick={() => toggleLike(post.id)}
                                className={`w-6 h-6 cursor-pointer transition ${post.leGustaUsuario
                                        ? "fill-red-500 text-red-500"
                                        : "text-gray-800"
                                    }`}
                            />
                            <MessageCircle className="w-6 h-6 cursor-pointer" />
                        </div>
                        <Bookmark
                            onClick={() => toggleSave(post.id)}
                            className={`w-6 h-6 cursor-pointer ${post.guardadosActivo
                                    ? "fill-black text-black"
                                    : "text-gray-800"
                                }`}
                        />
                    </div>

                    <div className="px-3 text-sm font-semibold">
                        {post.likes.toLocaleString()} Me gusta
                    </div>

                    <div className="px-3 text-sm mt-1">
                        <span className="font-semibold mr-1">
                            {post.usuario.username}
                        </span>
                        {post.descripcion}
                    </div>

                    <div className="px-3 text-sm text-gray-500 mt-1">
                        Ver los {post.comentarios} comentarios
                    </div>

                    <div className="px-3 pb-3 text-xs text-gray-400 mt-1">
                        {new Date(post.fecha).toLocaleDateString()}
                    </div>
                </div>
            ))}
        </div>
    )
}
