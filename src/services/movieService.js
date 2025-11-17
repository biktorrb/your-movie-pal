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