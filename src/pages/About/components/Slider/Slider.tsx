import React from "react";

type SliderProps = {
  imgs: string[];
};

const Slider = ({ imgs }: SliderProps) => {
  return <div></div>;
};

/*
  <div
          id="photo-slider"
          //make a slider with the images
          className="w-96 h-56 relative p-5 rounded-xl border-slate-800 border-2 z-0 mr-5 mb-5  float-left  overflow-hidden
        before:content-[''] before:absolute before:w-1/2 before:h-1/2 before: before:bg-slate-100  before:z-6 before:top-[51%] before:right-[51%] 
        after:content-[''] after:absolute after:w-1/2 after:h-1/2 after:rounded-xl after:bg-slate-100 after:z-6 after:bottom-[51%] after:left-[51%]
        "
        >
          {about.content.about_me.imgs.length > 0 &&
            about.content.about_me.imgs.map((image, index) => (
              <img
                src={image}
                alt="Foto de perfil"
                className={`object-cover z-10 relative w-full h-full rounded-xl ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              />
            ))}
          <img
            src="/images/placeholder.jpg"
            alt="Foto de perfil"
            className="object-cover z-10 relative w-full h-full rounded-xl"
          />
        </div>
*/
export default Slider;
