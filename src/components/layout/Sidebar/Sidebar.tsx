import useActivePageRecoil, {
  activePageType,
} from "@/recoil/activePageRecoil/useActivePageRecoil";
import "./Sidebar.css";

const Sidebar = () => {
  const { activePage } = useActivePageRecoil();
  const pages = [
    "home",
    "work",
    "about",
    "experience",
    "contact",
  ] as activePageType[];
  const mapIDtoPage = {
    home: "Inicio",
    work: "Trabajo",
    about: "Acerca de mi",
    experience: "Experiencia",
    contact: "Contacto",
  };

  return (
    <div id="sidebar" className="hidden lg:block sition-all duration-700">
      <div
        className=" w-40 h-screen bg-slate-200 flex flex-col 
          justify-between 
          items-center "
      >
        <ul
          className="
            flex 
            flex-col 
            justify-center 
            items-center 
            h-1/2
        "
        >
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={`cursor-pointer h-4 mb-4`}
                onClick={() => {
                  const element = document.getElementById(page);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <a href={`#${page}`}>
                  <span
                    className={`item ${activePage == page ? "active" : ""}`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>
        <div id="arrowdown-container" className="h-1/2 w-full relative">
          {activePage === "home" ? (
            <div className="h-full w-full relative flex justify-center">
              <p className="titulo_pagina_inicio absolute z-10 bg-slate-200 pr-10 tracking-[0.3em]">
                SCROLL
              </p>
              <div className="absolute w-16 h-full">
                <div id="arrowdown" className="relative h-full w-full">
                  <div className="line"></div>
                  <div className="point"></div>
                </div>
              </div>
            </div>
          ) : (
            <p className="titulo_pagina tracking-[0.3em]">
              {mapIDtoPage[activePage].toLocaleUpperCase()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
