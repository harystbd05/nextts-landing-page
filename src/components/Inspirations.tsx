import Image from "next/image";
import { useState } from "react";
import inspirations from "../data/InspirationData";

const Inspirations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirations.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? inspirations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-beige p-4 md:p-8">
      {/* Left Section */}
      <div className="w-full md:w-1/3 p-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded">
          Explore More
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full md:w-2/3 relative">
        {inspirations.map((inspiration, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } transition-all duration-500 ease-in-out`}
          >
            <Image
              src={inspiration.imageSrc}
              alt={inspiration.title}
              layout="responsive"
              width={700}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
              <h3 className="text-lg font-bold">{inspiration.title}</h3>
              <p className="text-sm text-gray-500">{inspiration.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 md:left-0 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-lg"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-0 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-lg"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Inspirations;
