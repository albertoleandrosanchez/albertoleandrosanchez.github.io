import React from "react";

type SliderProps = {
  imgs: string[];
};

const Slider = ({ imgs }: SliderProps) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs]);

  return (
    <div
      className="w-full h-44 lg:w-[40em] lg:h-72 relative p-5 rounded-xl lg:border-slate-800 lg:border-2 z-0 m-5 
      before:hidden lg:before:block lg:before:content-[''] before:absolute before:w-1/2 before:h-1/2 before: before:bg-slate-100  before:z-6 before:top-[51%] before:right-[51%] 
      after:hidden lg:after:block after:content-[''] after:absolute after:w-1/2 after:h-1/2 after:rounded-xl after:bg-slate-100 after:z-6 after:bottom-[51%] after:left-[51%]
  "
    >
      {imgs.length > 0 &&
        imgs.map((image, index) => (
          <img
            src={image}
            alt="Foto de perfil"
            className={` 
            z-10 absolute h-full w-full rounded-xl duration-[2s] max-w-full pb-10 pr-10
            transform translate-x-0 transition-all ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
            key={index}
          />
        ))}
    </div>
  );
};
export default Slider;
