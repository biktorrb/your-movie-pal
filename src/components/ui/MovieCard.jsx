import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(movie) {
    if(!movie) return null;

    const { id, title, poster_path, vote_average } = movie;

    const posterUrl = poster_path
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`
    : 'https://via.placeholder.com/500x750.png?text=No+disponible';

    return (
        <Link 
            to={`/movie/${id}`} 
            className="block w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                        transform transition-transform duration-300 ease-in-out 
                        hover:scale-105 hover:shadow-2xl"
        >
            <div className="relative">
                {/* Usamos aspect-ratio para evitar que la página "salte" mientras cargan las imágenes */}
                <img
                src={posterUrl}
                alt={`Póster de ${title}`}
                className="w-full object-cover aspect-[2/3]" // Proporción 2:3 de póster
                />
                
                {/* Badge para el Rating (Posicionado Absoluto) */}
                <span 
                className="absolute top-2 left-2 bg-yellow-500 text-black text-xs 
                            font-bold px-2 py-1 rounded-full flex items-center gap-1"
                >
                ⭐ {vote_average.toFixed(1)} {/* Formateamos a 1 decimal */}
                </span>
            </div>

            {/* Contenido de texto */}
            <div className="p-4">
                <h3 className="text-white text-lg font-bold truncate">
                {title}
                </h3>
                {/* Podrías agregar el año aquí si lo deseas */}
                {/* <p className="text-gray-400 text-sm">{movie.release_date.split('-')[0]}</p> */}
            </div>
        </Link>
    );
}

export default MovieCard;