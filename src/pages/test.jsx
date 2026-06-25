import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const MovieModal = () => {
    const [movies, setMovies] = useState([1,2,3,4,5,6])
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide >
              <div><h1>{movie}</h1></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieModal;
