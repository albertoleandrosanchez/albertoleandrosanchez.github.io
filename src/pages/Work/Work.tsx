import PageContainer from "@/components/layout/PageContainer";
import { work } from "@/lang/es";
import "./Work.css";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PageInterface } from "@/interfaces/Page";
import Badge from "@/components/Badge";
import Carousel from "../../components/Carousel/Carousel";
const Work = ({ id, className }: PageInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDragging, setIsDragging] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const DRAG_BUFFER = 50;
  const dragX = useMotionValue(0);
  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
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

  //avoid dragging out of bounds

  return (
    <PageContainer className={`p-8 overflow-hidden ${className}`} id={id}>
      <motion.div
        id="workpage_container"
        className="flex first:pl-0 last:pr-0 cursor-grab active:cursor-grabbing"
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
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {work.content.works.map((work_item, index) => (
          <motion.div
            id="work"
            className="w-fit min-w-full h-1/2 pr-20 "
            key={index}
          >
            <Carousel
              imgs={["src/assets/img/AC_1.png", "src/assets/img/AC_2.png"]}
              noButtons
            />
            {/* <div
              id="img_carrousel"
              className="
            w-1/4 h-1/2 my-2
            "
            >
              <img
                src={work_item.project_image?.[0] ?? "images/placeholder.jpg"}
                alt="placeholder"
                className="w-full h-80 object-contain rounded-lg shadow-lg"
              />
            </div> */}
            <div id="work_info" className="w-3/4 h-1/2 my-2">
              <div id="work_info_header" className="flex flex-col">
                <p className="tracking-widest ">
                  {work_item.project_name} | {work_item.project_owner}
                </p>
                <div className="flex ">
                  {work_item.proyect_role?.map((role, index) => (
                    <div className="mr-2" key={index}>
                      <Badge title={role} color="blue" key={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              id="work_info_header_divider"
              className="w-full h-[.1em] bg-slate-400 rounded"
            />
            <div id="work_info_body" className="my-2">
              <p className="text-justify">{work_item.project_description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div id="workpage_indicator" className="flex justify-center mt-4">
        {work.content.works.map((_, index) => (
          <div
            id="workpage_indicator_dot"
            onClick={() => setWorkIndex(index)}
            className={`w-2 h-2 rounded-full mx-1 ${
              workIndex === index ? "bg-slate-400" : "bg-slate-200"
            }`}
            key={index}
          />
        ))}
      </motion.div>
    </PageContainer>
  );
};

export default Work;
