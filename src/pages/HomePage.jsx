import { useQuery} from '@tanstack/react-query';
import { 
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies, 
} from '@/services/movieService';
import MovieCarousel from '@/components/MovieCarousel';
import { BsFire, BsStarFill, BsFillCalendar2DateFill } from "react-icons/bs";



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

    if (popularMoviesError || topRatedMoviesError || upcomingMoviesError) {
        return <div className="text-red-500 text-center mt-10">Hubo un error cargando las películas.</div>;
    }
    
    return (
        <div className='bg-gray-950 min-h-screen pb-10'>
            <div className="container mx-auto py-8">
                
                {/* Populares */}
                <MovieCarousel 
                    title={
                        <>
                            <span className='text-orange-400'><BsFire /></span>
                            <span>Populars</span>
                        </>
                    } 
                    movies={popularMoviesData?.results} 
                    isLoading={isPopularMoviesLoading} 
                />

                {/* Mejor Valoradas */}
                <MovieCarousel 
                    title={
                        <>
                            <span className='text-amber-300'><BsStarFill /></span>
                            <span>Top Rated</span>
                        </>
                    } 
                    movies={topRatedMoviesData?.results} 
                    isLoading={isTopRatedMoviesLoading} 
                />

                {/* Próximamente */}
                <MovieCarousel 
                    title={
                        <>
                            <span className='text-stone-50'><BsFillCalendar2DateFill /></span>
                            <span>Upcoming Releases</span>
                        </>
                    } 
                    movies={upcomingMoviesData?.results} 
                    isLoading={isUpcomingMoviesLoading} 
                />
                
            </div>
        </div>
    );
}

export default HomePage;