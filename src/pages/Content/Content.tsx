import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import "./Content.css";
import { useEffect, useRef, useState } from "react";
import useActivePageRecoil from "@/recoil/activePageRecoil/useActivePageRecoil";
import Experience from "../Experience";
const Content = () => {
  const [sections, setSections] = useState<Array<any>>([]);
  const { setActivePageRecoil } = useActivePageRecoil();
  const content_container = useRef<HTMLDivElement>(null);
  const resizeHandler = () => {
    const childrens = [].slice.call(
      content_container?.current?.children
    ) as HTMLDivElement[];
    setSections(childrens);
  };

  useEffect(() => {
    const childrens = [].slice.call(
      content_container?.current?.children
    ) as HTMLDivElement[];
    setSections(childrens);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
    /* quiero que la dependencia sea width de la ventana */
  }, [content_container]);

  return (
    <div
      ref={content_container}
      id="content_container"
      className="w-full h-screen overflow-y-scroll lg:snap-y lg:snap-proximity"
      onScrollCapture={(e) => {
        /* capture the scroll event and show Y position */
        /* with that Y position i want to recognize the Id of the childrens */
        const y_position = (e.target as HTMLDivElement).scrollTop;
        sections.forEach((section) => {
          const { id } = section;
          const { offsetTop, offsetHeight } = section;
          if (
            y_position >= offsetTop &&
            y_position <= offsetTop + offsetHeight
          ) {
            setActivePageRecoil(id);
          }
        });
      }}
    >
      <Home id="home" className="snap-start" />
      <Work id="work" className="snap-start" />
      <About id="about" className="snap-start" />
      <Experience id="experience" className="snap-start" />
      <Contact id="contact" className="snap-start" />
    </div>
  );
};

export default Content;
