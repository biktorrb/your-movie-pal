import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import MovieCard from '@/components/MovieCard';

const MovieCarousel = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-8 px-4">
      {/* Título de la Sección */}
      <h2 className="text-2xl font-bold text-white mb-4 border-red-600 pl-3 flex items-center gap-2 justify-center">
        {title}
      </h2>

      {/* Contenedor del Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation 
        breakpoints={{
          320: {
            slidesPerView: 2, 
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;