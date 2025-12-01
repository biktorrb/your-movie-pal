import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos, fetchMovieCredits } from '@/services/movieService';
import { IoChevronBackOutline } from "react-icons/io5";
import Button from '@/components/ui/Button';


const MovieDetailsPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { data: movie, isLoading, error } = useQuery({
        queryKey: ['movieDetails', id],
        queryFn: () => fetchMovieDetails(id)
    });

    const { data: videosData, isLoading: videosLoading } = useQuery({
        queryKey: ['movieVideos', id],
        queryFn: () => fetchMovieVideos(id)
    });

    const { data: creditsData, isLoading: creditsLoading } = useQuery({
        queryKey: ['movieCredits', id],
        queryFn: () => fetchMovieCredits(id)
    });

    if (isLoading || videosLoading || creditsLoading) return <div className="text-white text-center mt-20 text-xl animate-pulse">Loading Movie...</div>;
    if (error) return <div className="text-red-500 text-center mt-20 text-xl">Error while loading movie details.</div>;

    
    const trailer = videosData?.results?.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
    );

 
    const topCast = creditsData?.cast
        ? [...creditsData.cast].sort((a, b) => a.order - b.order).slice(0, 8)
        : [];

    const directors = creditsData?.crew
        ? creditsData.crew.filter(member => member.job === 'Director')
        : [];

    return (
        <div className="bg-gray-900 min-h-screen text-white pb-20">
            
            {/* --- HERO SECTION --- */}
            <div 
                className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
            >
                <div className="absolute top-4 left-4 z-10">
                    <Button
                        onClick={() => navigate(-1)}
                        variant="no_bg"
                        className="!text-slate-50 !bg-gray-800/50 !hover:bg-gray-800/70"
                    >
                        <IoChevronBackOutline className="inline-block mr-2" /> Go Back
                    </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex items-end p-8">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
                        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed line-clamp-3">
                            {movie.overview}
                        </p>
                        <div className="flex gap-4 mt-4 text-sm font-semibold text-gray-400">
                            <span>{movie.release_date?.split('-')[0]}</span>
                            <span>•</span>
                            <span>{movie.runtime} min</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="container mx-auto px-4 py-12 space-y-16">
                
                {/* 1. SECCIÓN TRAILER */}
                {!videosLoading && trailer && (
                    <section>
                        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-red-500 pl-4">
                            Official Trailer
                        </h2>
                        <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                )}

                {/* 2. SECCIÓN REPARTO (CAST) */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 border-l-4 border-yellow-500 pl-4">Main Cast</h2>
                    
                    {creditsLoading ? (
                        <p>Loading cast...</p>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {topCast.map(actor => (
                                <div key={actor.id} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                    <img 
                                        src={actor.profile_path 
                                            ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` 
                                            : 'https://placehold.co/300x450?text=Sin+Foto'} 
                                        alt={actor.name}
                                        className="w-full h-64 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="p-3">
                                        <h3 className="font-bold text-sm truncate" title={actor.name}>{actor.name}</h3>
                                        <p className="text-gray-400 text-xs truncate" title={actor.character}>{actor.character}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* 3. SECCIÓN DIRECTORES */}
                {directors.length > 0 && (
                     <section>
                        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-4">Direction</h2>
                        <div className="flex flex-wrap gap-4">
                            {directors.map(director => (
                                <div key={director.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg pr-8">
                                    <img 
                                        src={director.profile_path 
                                            ? `https://image.tmdb.org/t/p/w185${director.profile_path}` 
                                            : 'https://placehold.co/100x100?text=Director'} 
                                        alt={director.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                    />
                                    <div>
                                        <h3 className="font-bold">{director.name}</h3>
                                        <p className="text-sm text-gray-400">{director.job}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

export default MovieDetailsPage;