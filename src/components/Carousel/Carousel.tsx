import React, { useEffect } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgs: string[];
  noButtons?: boolean;
}
const Carousel = ({ imgs, noButtons, ...props }: Props) => {
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(autoSlide);
  });
  const [current, setCurrent] = React.useState(0);
  const previousImg = () => {
    if (current === 0) setCurrent(imgs.length - 1);
    else setCurrent(current - 1);
  };

  const nextImg = () => {
    if (current === imgs.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div {...props} className="relative overflow-hidden cursor-pointer">
      <div className={`flex transition ease-out duration-4 `}>
        {imgs.map((img, index) => (
          <div className="min-w-full xl:h-80 2xl:h-96 " key={img}>
            <img
              src={img}
              className={`block object-center transition ease-out duration-1000 ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
              alt="Wild Landscape"
            />
          </div>
        ))}
      </div>
      {!noButtons && (
        <>
          <button
            className="absolute top-1/2 left-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black bg-opacity-50 rounded-full"
            onClick={previousImg}
          >
            <svg
              className="w-6 h-6"
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
            className="absolute top-1/2 right-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black bg-opacity-50 rounded-full"
            onClick={nextImg}
          >
            <svg
              className="w-6 h-6"
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
        </>
      )}
    </div>
  );
};

export default Carousel;
