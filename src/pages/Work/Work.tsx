import PageContainer from "@/components/layout/PageContainer";
import { work } from "@/lang/es";
import "./Work.css";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PageInterface } from "@/interfaces/Page";
import Badge from "@/components/Badge";
import Carousel from "../../components/Carousel/Carousel";
import { TechKeys, techs } from "@/lang/tech";
const Work = ({ id, className }: PageInterface) => {
  const [workIndex, setWorkIndex] = useState(0);
  const DRAG_BUFFER = 50;
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x < DRAG_BUFFER * -1) {
      if (workIndex === work.content.works.length - 1) return;
      setWorkIndex((prev) => prev + 1);
    } else if (x > DRAG_BUFFER) {
      if (workIndex === 0) return;
      setWorkIndex((prev) => prev - 1);
    }
    dragX.set(0);
  };

  const openWork = (href: string) => {
    //abrir otra pestaña con la pagina del proyecto

    window.open(href, "_blank");
  };

  return (
    <PageContainer className={`p-8 h-full  ${className}`} id={id}>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative overflow-hidden items-center">
          {workIndex !== 0 && (
            <div
              id="fadeout-left"
              className="z-20 cursor-pointer absolute top-0  -left-1/2 w-1/2 h-full bg-gradient-to-l from-transparent to-slate-100"
              onClick={() => {
                setWorkIndex((prev) => prev - 1);
              }}
            />
          )}
          <motion.div
            id="workpage_container"
            className="flex first:pl-0 last:pr-0 cursor-grab active:cursor-grabbing "
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: workIndex * -100 + "%",
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            onDragEnd={onDragEnd}
          >
            {work.content.works.map((work_item, index) => (
              <motion.div
                id="work"
                className="w-fit min-w-full h-1/2 pr-0 lg:pr-20 relative "
                key={index}
              >
                <Carousel
                  onClick={() => openWork(work_item.proyect_url ?? "")}
                  imgs={work_item.project_image ?? []}
                  noButtons
                />
                <div id="work_info" className="w-full h-1/2 my-2 ">
                  <div id="work_info_header" className="flex flex-col ">
                    <p className="tracking-widest border-b-2 border-b-slate-300 w-fit">
                      {work_item.project_name} | {work_item.project_owner}
                    </p>
                    <div className="flex flex-wrap justify-between overflow-y-scroll h-28 lg:overflow-y-hidden">
                      <div className="flex flex-col w-1/2">
                        <p className="text-sm italic">role</p>
                        <div className="flex mt-2 flex-wrap">
                          {work_item.proyect_role?.map((role, index) => (
                            <div className="mr-2" key={index}>
                              <Badge
                                title={role}
                                color="blue"
                                key={index}
                                size="tiny"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div id="technologies" className="w-1/2 ">
                        <p className="text-sm italic">Tecnologias usadas</p>
                        <div
                          id="tech_container"
                          className="flex w-full flex-wrap "
                        >
                          {work_item.proyect_technologies.map(
                            (tech: TechKeys, index) => (
                              // <Badge title={tech} color="slate" key={index} />
                              <div
                                className="flex items-center mr-4 mt-2 border-b-2 border-b-blue-500 px-2"
                                key={index}
                              >
                                <i className={techs[tech].icon} key={index}></i>

                                <p className="ml-2 first-letter:uppercase">
                                  {tech}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="work_info_header_divider"
                  className="w-full h-[.1em] bg-slate-400 rounded"
                />
                <div id="work_info_body" className="my-2">
                  <p className="text-justify">
                    {work_item.project_description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {workIndex !== work.content.works.length - 1 && (
            <div
              id="fadeout-right"
              className="z-20 cursor-pointer absolute top-0  -right-1/2 w-1/2 h-full bg-gradient-to-r from-transparent to-slate-100"
              onClick={() => {
                setWorkIndex((prev) => prev + 1);
              }}
            />
          )}
        </div>
        <motion.div
          id="workpage_indicator"
          className="flex justify-center mt-4"
        >
          {work.content.works.map((_, index) => (
            <div
              id="workpage_indicator_dot"
              onClick={() => setWorkIndex(index)}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                workIndex === index ? "bg-slate-400" : "bg-slate-200"
              }`}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </PageContainer>
  );
};

export default Work;
