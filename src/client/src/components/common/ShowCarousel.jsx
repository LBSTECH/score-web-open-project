import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg'; // Replace with actual path
import { ReactComponent as ArrowRight } from './icons/arrow-right.svg'; // Replace with actual path

const ShowCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div id="indicators-carousel" className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`duration-700 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                    >
                        <img 
                            src={image.src} 
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {images.map((_, index) => (
                    <button 
                        key={index}
                        type="button" 
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={activeIndex === index ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <button 
                type="button" 
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToPrevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <ArrowLeft className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button 
                type="button" 
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <ArrowRight className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default ShowCarousel;
