import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from '@/services/movieService';
import CategoryRow from '@/components/CategoryRow'; 

function CategoriesPage() {
    const { data: genresData, isLoading, error } = useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    });

    if (isLoading) return <div className="text-white text-center mt-20 text-xl animate-pulse">Cargando categorías...</div>;
    if (error) return <div className="text-red-500 text-center mt-20 text-xl">Error cargando datos.</div>;

    const genres = genresData?.genres || [];

    return (
        <div className="bg-gray-950 min-h-screen pb-10 pt-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8 px-4">All Categories</h1>
                
                <div className="flex flex-col gap-6">
                    {genres.map(genre => (
                        <CategoryRow 
                            key={genre.id} 
                            genreId={genre.id} 
                            genreName={genre.name} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;