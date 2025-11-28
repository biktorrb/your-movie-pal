import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre } from '@/services/movieService';
import MovieCarousel from '@/components/MovieCarousel'; 

const CategoryRow = ({ genreId, genreName }) => {
    
    const { data, isLoading } = useQuery({
        queryKey: ['moviesByGenre', genreId],
        queryFn: () => fetchMoviesByGenre(genreId),
    });

    if (isLoading) return <div className="h-40 bg-gray-900/50 animate-pulse my-4 rounded"></div>;
    if (!data?.results?.length) return null;

    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 px-4 border-l-4 border-red-600 ml-4">
                {genreName}
            </h3>
            <MovieCarousel movies={data.results} />
        </div>
    );
};

export default CategoryRow;