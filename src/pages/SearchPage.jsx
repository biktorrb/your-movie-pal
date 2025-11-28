import { useSearchParams, Link } from 'react-router-dom'; 
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '@/services/movieService';
import { FaSadTear } from "react-icons/fa";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query'); 
    const { data, isLoading } = useQuery({
        queryKey: ['search', query],
        queryFn: () => searchMovies(query),
        enabled: !!query, 
    });

    const movies = data?.results || [];

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Título de la sección */}
            <h2 className="text-2xl font-semibold text-white mb-6">
                Resultados para: <span className="text-amber-300 italic">"{query}"</span>
            </h2>

            {/* ESTADO DE CARGA */}
            {isLoading && (
                <div className="text-white text-center py-20 animate-pulse">
                    Buscando en la base de datos...
                </div>
            )}

            {/* ESTADO VACÍO (Si buscó "sfdsfsd" y no hubo resultados) */}
            {!isLoading && movies.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-xl">No encontramos películas con ese nombre <FaSadTear className="inline-block !text-amber-300" /></p>
                </div>
            )}

            {/* REJILLA DE RESULTADOS */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <Link 
                        to={`/movie/${movie.id}`} 
                        key={movie.id} 
                        className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
                    >
                        <div className="aspect-[2/3] overflow-hidden">
                            <img 
                                src={movie.poster_path 
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                                    : 'https://placehold.co/500x750?text=No+Image'} 
                                alt={movie.title}
                                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-bold truncate">{movie.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">
                                {movie.release_date?.split('-')[0] || 'N/A'}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;