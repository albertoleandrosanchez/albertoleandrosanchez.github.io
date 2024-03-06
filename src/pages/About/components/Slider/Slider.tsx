import React from "react";

type SliderProps = {
  imgs: string[];
};

const Slider = ({ imgs }: SliderProps) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imgs]);

  return (
    <div className="w-full h-72 relative p-5">
      {imgs.length > 0 &&
        imgs.map((image, index) => (
          <div
            className={` 
              z-10 absolute h-full w-full duration-[1s] max-w-full pb-10 pr-10
              transform translate-x-0 transition-all ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt="Foto de perfil"
              key={index}
              className="
              w-full h-full object-contain rounded-xl
            "
            />
          </div>
        ))}
    </div>
  );
};
export default Slider;
