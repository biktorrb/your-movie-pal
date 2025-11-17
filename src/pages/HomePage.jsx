import { useQuery} from '@tanstack/react-query';
import { 
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies, 
} from '@/services/movieService';

function HomePage() {
    const {
        data: popularMoviesData,
        isLoading: isPopularMoviesLoading,
        error: popularMoviesError,
    } = useQuery({
        queryKey: ['popularMovies'],
        queryFn: fetchPopularMovies,
    });
    const {
        data: topRatedMoviesData,
        isLoading: isTopRatedMoviesLoading,
        error: topRatedMoviesError,
    } = useQuery({
        queryKey: ['topRatedMovies'],
        queryFn: fetchTopRatedMovies,
    });
    const {
        data: upcomingMoviesData,
        isLoading: isUpcomingMoviesLoading,
        error: upcomingMoviesError,
    } = useQuery({
        queryKey: ['upcomingMovies'],
        queryFn: fetchUpcomingMovies,
    });
    
    return (
        <div className='container mx-auto p-4'>
            {/* --- Sección Populares --- */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">Populares</h2>
                {isPopularMoviesLoading && <div className="text-white">Cargando...</div>}
                {popularMoviesError && <div className="text-red-500">Error al cargar películas populares.</div>}
                {popularMoviesData && (
                <pre className="text-green-400 bg-gray-800 p-2 rounded">
                    {JSON.stringify(popularMoviesData.results.slice(0, 3), null, 2)}
                </pre>
                )}
            </section>

            {/* --- Sección Mejor Valoradas --- */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-white">Mejor Valoradas</h2>
                {isTopRatedMoviesLoading && <div className="text-white">Cargando...</div>}
                {topRatedMoviesError && <div className="text-red-500">Error al cargar películas mejor valoradas.</div>}
                {topRatedMoviesData && (
                <pre className="text-green-400 bg-gray-800 p-2 rounded">
                    {JSON.stringify(topRatedMoviesData.results.slice(0, 3), null, 2)}
                </pre>
                )}
            </section>

            {/* --- Sección Próximamente --- */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Próximamente</h2>
                {isUpcomingMoviesLoading && <div className="text-white">Cargando...</div>}
                {upcomingMoviesError && <div className="text-red-500">Error al cargar próximos estrenos.</div>}
                {upcomingMoviesData && (
                <pre className="text-green-400 bg-gray-800 p-2 rounded">
                    {JSON.stringify(upcomingMoviesData.results.slice(0, 3), null, 2)}
                </pre>
                )}
            </section>
        </div>
    );
}

export default HomePage;