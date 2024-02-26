import PageContainer from "@/components/layout/PageContainer";
import "./About.css";
import { about } from "@/lang/es";
import { PageInterface } from "@/interfaces/Page";
import Slider from "./components/Slider/Slider";

const About = ({ id, className }: PageInterface) => {
  return (
    <PageContainer id={id} className={`p-8  ${className}`}>
      <div id="about-me" className="relative z-10 flex flex-col items-center">
        <Slider imgs={about.content.about_me.imgs} />
        {about.content.about_me.description.length > 0 &&
          about.content.about_me.description.map((description, index) => (
            <p key={index} className="mb-5 text-sm lg:text-lg">
              {description}
            </p>
          ))}
      </div>
    </PageContainer>
  );
};

export default About;
