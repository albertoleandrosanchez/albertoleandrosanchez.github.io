import { PageInterface } from "@/interfaces/Page";
import PageContainer from "../../components/layout/PageContainer";
import { networks } from "@/lang/network";

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
            {
              // eslint-disable-next-line array-callback-return
              Object.keys(networks).map((key) => {
                const network = networks[key];
                return (
                  <a
                    href={network.url}
                    target="_blank"
                    key={key}
                    rel="noreferrer"
                  >
                    <i className={`${network.icon} text-3xl text-blue-900`} />
                  </a>
                );
              })
            }
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
