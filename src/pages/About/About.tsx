import PageContainer from "@/components/layout/PageContainer";
import "./About.css";
import { about } from "@/lang/es";
import { PageInterface } from "@/interfaces/Page";
import Skill from "./components/Skill/Skill";

const About = ({ id, className }: PageInterface) => {
  return (
    <PageContainer id={id} className={`p-8  ${className}`}>
      {/* 
      <div id="about-me" className="relative z-10">
        <Slider imgs={about.content.about_me.imgs} />
        {about.content.about_me.description.length > 0 &&
          about.content.about_me.description.map((description, index) => (
            <p key={index} className="mb-5 text-sm">
              {description}
            </p>
          ))}
      </div>
       */}
      <div
        id="education"
        className="flex flex-col w-full mb-10 border-b-2 border-b-slate-200 pb-5"
      >
        <h1
          id="education-title"
          className="mb-5 tracking-wider text-2xl font-bold text-blue-700 lg:text-3xl lg:mb-5 
        "
        >
          {about.content.education_content.title}
        </h1>
        <div
          id="education-list"
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center"
        >
          {about.content.education_content.education.length > 0 &&
            about.content.education_content.education.map(
              (education, index) => (
                <div
                  className="flex flex-col mb-5 lg:w-1/2 lg:mb-0"
                  key={index}
                >
                  <h2 className="mb-1 text-lg  text-blue-700">
                    {education.title}
                  </h2>
                  <p className="text-sm ">{education.place}</p>
                  <p className="text-sm text-slate-500">
                    {education.description}
                  </p>
                </div>
              )
            )}
        </div>
      </div>

      <div
        id="experience"
        className="flex flex-col w-full mb-10 border-b-2 border-b-slate-200 pb-5"
      >
        <h1
          id="experience-title"
          className="mb-5 tracking-wider text-2xl font-bold text-blue-700 lg:text-3xl lg:mb-5
        "
        >
          {about.content.experience_content.title}
        </h1>
        <div
          id="experience-list"
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center"
        >
          {about.content.experience_content.experience.length > 0 &&
            about.content.experience_content.experience.map(
              (experience, index) => (
                <div
                  className="flex flex-col mb-5 lg:w-1/2 lg:mb-0"
                  key={index}
                >
                  <h2 className="mb-1 text-lg  text-blue-700">
                    {experience.title}
                  </h2>
                  <p className="text-sm ">{experience.place}</p>
                  <p className="text-sm text-slate-500">
                    {experience.description}
                  </p>
                </div>
              )
            )}
        </div>
      </div>
      <div id="skills" className=" flex flex-col w-full ">
        <h1
          id="skills-title"
          className="mb-5 tracking-wider text-2xl font-bold text-blue-700 lg:text-3xl lg:mb-5
        "
        >
          Habilidades
        </h1>
        <div
          id="skills-list"
          className="flex h-full first:border-r-2 first:pr-5 overflow-x-scroll lg:overflow-hidden"
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
