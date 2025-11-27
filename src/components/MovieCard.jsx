import React from 'react';
import { Link } from 'react-router-dom';


function MovieCard({ movie }) {
    
    if(!movie) return null;

    const { id, title, poster_path, vote_average } = movie;

    const posterUrl = poster_path
    ? `${import.meta.env.VITE_TMBBD_API_IMAGE_BASE_URL}${poster_path}`
    : 'https://placehold.co/600x400';

    const rating = typeof vote_average === 'number' ? vote_average.toFixed(1) : 'N/A';

    return (
        <Link 
            to={`/movie/${id}`} 
            className="block w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                        transform transition-transform duration-300 ease-in-out 
                        hover:scale-105 hover:shadow-2xl group" 
        >
            <div className="relative">
                <img
                    src={posterUrl}
                    alt={`Póster de ${title}`}
                    className="w-full object-cover aspect-[2/3]"
                    loading="   " 
                />
                
                {/* Badge para el Rating */}
                <span 
                    className="absolute top-2 left-2 bg-yellow-500 text-black text-xs 
                                font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md"
                >
                    ⭐ {rating}
                </span>
            </div>

            <div className="p-4">
                <h3 className="text-white text-lg font-bold truncate group-hover:text-yellow-400 transition-colors">
                    {title}
                </h3>
            </div>
        </Link>
    );
}

export default MovieCard;