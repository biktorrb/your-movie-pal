import apiClient from '@/services/apiClient'

export const fetchPopularMovies = async () => {
    try {
        const { data } = await apiClient.get('/movie/popular');
        return data;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}

export const fetchTopRatedMovies = async () => {
    try {
        const { data } = await apiClient.get('/movie/top_rated');
        return data;
    } catch (error) {
        console.error('Error fetching top rated movies:', error);
        throw error;
    }
}

export const fetchUpcomingMovies = async () => {
    try {
        const { data } = await apiClient.get('/movie/upcoming');
        return data;
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        throw error;
    }
}

export const fetchMovieDetails = async (movieId) => {
    try {
        const { data } = await apiClient.get(`/movie/${movieId}`);
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
}

export const fetchMovieVideos = async (movieId) => {
    try {
        const { data } = await apiClient.get(`/movie/${movieId}/videos`);
        return data;
    } catch (error) {
        console.error('Error fetching movie trailers:', error);
        throw error;
    }
}

export const fetchMovieCredits = async (movieId) => {
    try {
        const { data } = await apiClient.get(`/movie/${movieId}/credits`);
        return data;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        throw error;
    }
}

export const searchMovies = async (query) => {
    try {
        const { data } = await apiClient.get('/search/movie', {
            params: {
                query: query,
                include_adult: false,
                language: 'en-US',
                page: 1
            }
        });
        return data;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
}

export const fetchGenres = async () => {
    try {
        const { data } = await apiClient.get('/genre/movie/list');
        return data;
    } catch (error) {
        console.error('Error fetching movie genres:', error);
        throw error;
    }
}

export const fetchMoviesByGenre = async (genreId) => {
    try {
        const { data } = await apiClient.get('/discover/movie', {
            params: {
                include_adult: false,
                language: 'en-US',
                without_genres: genreId
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching movies by genre:', error);
        throw error;
    }
}
