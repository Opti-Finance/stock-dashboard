import React from 'react';
import '../index.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const NextArrow = ({ onClick }) => (
  <div
    className="text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 -right-6 transform -translate-y-1/2 cursor-pointer z-10 transition-all duration-300"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center absolute top-1/2 -left-6 transform -translate-y-1/2 cursor-pointer z-10 transition-all duration-300"
    onClick={onClick}
  >
    &#10094;
  </div>
);

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-[1050px] mx-auto p-10 relative rounded-lg overflow-hidden">
      <Slider {...settings}>
        {data.map((slide, index) => (
          <div key={index} className="px-2">
            <Link to={`/models/${index+1}`} state={{slide}}>
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/90 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-extrabold text-transparent bg-clip-text px-4 py-2 text-center tracking-wider"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          WebkitBackgroundClip: 'text',
                        }}>
                      {slide.title}
                    </h2>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h2 className="text-3xl font-bold text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-5">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;