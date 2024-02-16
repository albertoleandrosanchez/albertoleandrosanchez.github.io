import { PageInterface } from "@/interfaces/Page";
import PageContainer from "../../components/layout/PageContainer";

const Home = ({ id, className }: PageInterface) => {
  return (
    <PageContainer id={id}>
      <div
        className={`w-full h-screen flex flex-col justify-center items-center lg:pl-8 lg:items-start
      ${className}`}
      >
        <div className="w-fit flex flex-col items-center ">
          <p className="font-normal text-7xl text-blue-700">Alberto</p>
          <p className="font-thin text-5xl tracking-[.20em]">Sanchez</p>
          <div
            id="divider"
            className="
        w-full h-[.1em] rounded-sm bg-slate-500 my-2
        "
          />
          <p className=" text-3xl font-thin">Web Developer</p>
          <div id="icon-container" className="flex justify-evenly w-24 mt-2">
            <a
              href="
              https://www.linkedin.com/in/albertoleandrosanchez
          "
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-3xl " />
            </a>
            <a
              href="
            https://github.com/albertoleandrosanchez
          "
              target="_blank"
            >
              <i className="fab fa-github text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
