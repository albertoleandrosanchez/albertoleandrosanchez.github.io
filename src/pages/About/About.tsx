import PageContainer from "@/components/layout/PageContainer";
import "./About.css";
import { about } from "@/lang/es";
import { PageInterface } from "@/interfaces/Page";
import Skill from "./components/Skill/Skill";
import Slider from "./components/Slider/Slider";

const About = ({ id, className }: PageInterface) => {
  return (
    <PageContainer id={id} className={`p-8  ${className}`}>
      <div id="about-me" className="relative z-10">
        {/* Quiero que las etiquetas p se acomoden alrededor de la foto, osea sobre el lado derecho y si ya el lado derecho se llena que bajen */}
        <Slider imgs={about.content.about_me.imgs} />
        {about.content.about_me.description.length > 0 &&
          about.content.about_me.description.map((description, index) => (
            <p key={index} className="mb-5">
              {description}
            </p>
          ))}
      </div>
      <div id="skills" className=" flex flex-col w-full ">
        <h1
          id="skills-title"
          className="mb-5 text-3xl font-bold text-blue-700 lg:text-3xl lg:mb-5 lg:ml-20
        "
        >
          Habilidades
        </h1>
        <div
          id="skills-list"
          className="flex h-full first:border-r-2 first:pr-5  overflow-x-scroll"
        >
          {about.content.skill_content.skills.length > 0 &&
            about.content.skill_content.skills.map((skill, index) => (
              <Skill title={skill.title} skills={skill.skills} key={index} />
            ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
