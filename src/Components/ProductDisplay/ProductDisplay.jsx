import { useEffect, useState } from "react";
import Zoom from 'react-img-hover-zoom'

export const ProductDisplay = ({ product }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
  }, [product]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-[740px] h-[550px] md:h-[650px] mt-6">
      <div id="default-carousel" className="relative" data-carousel="static">
        <div className="overflow-hidden h-[600px] md:h-[600px] w-[740px] relative rounded-lg">
          <div className="duration-700 ease-in-out z-50" data-carousel-item>
            {product?.images.map((image, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  index === activeSlide ? "block" : "hidden"
                }`}
                data-carousel-item
              >
                <Zoom
                  img={image}
                  zoomScale={1.4}
                  transitionTime={0.8}
                  className="block absolute top-1/2 left-1/2 h-[600px] md:h-[700px] w-[740px] -translate-x-1/2 -translate-y-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            {product?.images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full z-0 ${
                  index === activeSlide ? "bg-white" : ""
                }`}
                aria-current={index === activeSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {product?.images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 rounded-full z-0 ${
                index === activeSlide ? "bg-white" : ""
              }`}
              aria-current={index === activeSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            handleSlideChange(
              (activeSlide - 1 + product?.images.length) %
                product?.images.length
            )
          }
        >
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() =>
            handleSlideChange((activeSlide + 1) % product?.images.length)
          }
        >
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};