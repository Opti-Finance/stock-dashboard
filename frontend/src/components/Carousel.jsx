import React, { useState } from 'react';
import '../index.css';

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  const prevIndex = (current - 1 + data.length) % data.length;
  const nextIndex = (current + 1) % data.length;

  return (
    <div className="relative w-full max-w-[700px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-50%) translateX(-${current * 100}%)` }}
      >
        <div className="w-[450px] h-[600px] flex-shrink-0 relative mx-2">
          {renderSlide(data[prevIndex])}
        </div>
        <div className="w-[450px] h-[600px] flex-shrink-0 relative mx-2">
          {renderSlide(data[current])}
        </div>
        <div className="w-[450px] h-[600px] flex-shrink-0 relative mx-2">
          {renderSlide(data[nextIndex])}
        </div>
      </div>
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  function renderSlide(slide) {
    return (
      <a href={slide.url} className="block w-full h-full relative rounded-lg overflow-hidden">
        <div 
          style={{ backgroundImage: `url(${slide.image})` }} 
          className="w-full h-full bg-cover bg-center rounded-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black via-black/70 opacity-90"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{slide.title}</h2>
            <p className="text-lg text-white">{slide.description}</p>
          </div>
        </div>
      </a>
    );
  }
};

export default Carousel;
