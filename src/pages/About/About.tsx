import PageContainer from "@/components/layout/PageContainer";
import "./About.css";
import { PageInterface } from "@/interfaces/Page";
import Skill from "./components/Skill/Skill";
import { SkillItemProps } from "./components/SkillItem/SkillItem";
const About = ({ id, className }: PageInterface) => {
  const skillsFrontend = [
    {
      title: "HTML5",
      icon: "fab fa-html5",
      level: "Basico",
    },
    {
      title: "CSS3",
      icon: "fab fa-css3-alt",
      level: "Avanzado",
    },
    {
      title: "JavaScript",
      icon: "fab fa-js",
      level: "Avanzado",
    },
    {
      title: "React",
      icon: "fab fa-react",
      level: "Intermedio-Avanzado",
    },
    {
      title: "Next.Js",
      icon: "fab fa-vuejs",
      level: "Intermedio",
    },
    {
      title: "Tailwind",
      icon: "fab fa-sass",
      level: "Intermedio",
    },
  ] as SkillItemProps[];

  const skillsBackend = [
    {
      title: "Node",
      icon: "fab fa-node",
      level: "Intermedio",
    },
    {
      title: "Express",
      icon: "fas fa-server",
      level: "Intermedio",
    },
    {
      title: "MongoDB",
      icon: "fas fa-database",
      level: "Intermedio",
    },
    {
      title: "SQL",
      icon: "fas fa-database",
      level: "Basico",
    },
  ] as SkillItemProps[];

  return (
    <PageContainer id={id} className={`p-8  ${className}`}>
      <div id="about-me" className="relative z-10">
        {/* Quiero que las etiquetas p se acomoden alrededor de la foto, osea sobre el lado derecho y si ya el lado derecho se llena que bajen */}
        <div
          id="photo-carousel"
          className="w-96 h-56 relative p-5 rounded-xl border-slate-800 border-2 z-0 mr-5 mb-5  float-left
        before:content-[''] before:absolute before:w-1/2 before:h-1/2 before: before:bg-slate-100  before:z-6 before:top-[51%] before:right-[51%] 
        after:content-[''] after:absolute after:w-1/2 after:h-1/2 after:rounded-xl after:bg-slate-100 after:z-6 after:bottom-[51%] after:left-[51%]
        "
        >
          <img
            src="/images/placeholder.jpg"
            alt="Foto de perfil"
            className="object-cover z-10 relative w-full h-full rounded-xl"
          />
        </div>
        <p className="mb-5">
          Soy Técnico informático graduado con más de 2 años y medio de
          experiencia en desarrollo web, apasionado por crear soluciones
          digitales que sean eficientes, escalables y fáciles de usar.
        </p>
        <p className="mb-5">
          Soy una persona proactiva, responsable y con un gran interés por la
          tecnología. Me gusta trabajar en equipo y estoy siempre dispuesto a
          aprender cosas nuevas.
        </p>
        <p className="mb-5">
          Disfruto participar de eventos, aparte de los eventos del trabajo
          también he participado de orador en un evento de la Universidad
          Nacional de Hurlingham.
        </p>
      </div>
      <div id="skills" className=" flex flex-col w-full   ">
        {/* quiero que el H1 no este en el centro, sino en el comienzo */}
        <h1
          id="skills-title"
          className="mb-5 text-3xl font-bold text-blue-700 lg:text-4xl lg:mb-10 lg:ml-20
        "
        >
          Habilidades
        </h1>
        <div id="skills-list" className="flex h-full">
          <Skill title="Frontend" skills={skillsFrontend} />
          <div
            id="divider"
            className=" h-full w-[2px]  bg-slate-300 ml-20 mr-5"
          />
          <Skill title="Backend" skills={skillsBackend} />
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
