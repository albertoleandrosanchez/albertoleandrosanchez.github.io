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
      className="w-96 h-56 relative p-5 rounded-xl border-slate-800 border-2 z-0 mr-5 mb-5  float-left  
      before:content-[''] before:absolute before:w-1/2 before:h-1/2 before: before:bg-slate-100  before:z-6 before:top-[51%] before:right-[51%] 
      after:content-[''] after:absolute after:w-1/2 after:h-1/2 after:rounded-xl after:bg-slate-100 after:z-6 after:bottom-[51%] after:left-[51%]
  "
    >
      {imgs.length > 0 &&
        imgs.map((image, index) => (
          <img
            src={image}
            alt="Foto de perfil"
            className={` object-cover z-10 absolute rounded-xl duration-[2s] max-w-full pr-10 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            key={index}
          />
        ))}
    </div>
  );
};
export default Slider;
