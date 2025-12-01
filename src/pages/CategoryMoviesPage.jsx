import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre } from '@/services/movieService';
import { useParams, useSearchParams } from "react-router-dom"; 
import MovieCard from '@/components/MovieCard';

const CategoryMoviesPage = () => {
    // 1. OBTENCIÓN DE DATOS
    const { id } = useParams(); 
    const [searchParams] = useSearchParams(); 
    const genreName = searchParams.get('name') || 'Movies'; 

    const { data: moviesData, isLoading, error } = useQuery({
        queryKey: ['moviesByGenre', id], 
        queryFn: () => fetchMoviesByGenre(id),
    });

    if (isLoading) return <div className="text-white text-center mt-20">Cargando...</div>;
    if (error) return <div className="text-red-500 text-center mt-20">Error al cargar.</div>;

    return (
        <div className="bg-gray-950 min-h-screen pb-20 pt-24"> {/* pt-24 para separar de la navbar */}
            <div className="container mx-auto px-4">
                
                <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                    All {genreName} Movies
                </h1>                
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {moviesData?.results.map(movie => (
                        <div key={movie.id} className="hover:scale-105 transition-transform duration-300">
                             <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>

            </div>
        </div>    
    );
}

export default CategoryMoviesPage;