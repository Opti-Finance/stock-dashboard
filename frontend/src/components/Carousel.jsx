import React from 'react';
import '../index.css';
import Slider from "react-slick";

const NextArrow = ({ onClick }) => (
  <div 
    className="text-white text-4xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div 
    className="text-white text-4xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10"
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
      slidesToScroll: data.length - 1,
      centerMode: true,
      centerPadding: '60px',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }
  
    return (
      <div className="w-[850px] mx-auto p-10 relative rounded-lg overflow-hidden">
          <Slider {...settings}>
            {data.map((slide, index) => (
              <div key={index} className="w-[450px] h-[600px] flex-shrink-0 relative mx-0 p-2">
                <a href={slide.url} className="block w-full h-full relative rounded-lg overflow-hidden">
                  <div 
                    style={{ backgroundImage: `url(${slide.image})` }} 
                    className="w-full h-full bg-cover bg-center rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-black/85 opacity-100"></div>
                    <div className="absolute top-1/2 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{slide.title}</h2>
                      <p className="text-lg text-white">{slide.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
      </div>
    )
  };
  
  export default Carousel;