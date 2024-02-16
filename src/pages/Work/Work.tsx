import PageContainer from "@/components/layout/PageContainer";
import "./Work.css";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PageInterface } from "@/interfaces/Page";
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
      if (
        workIndex === 2
        //TODO: replace with actual number of works
      )
        return;
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
          translateX: `-${workIndex * 100}%`,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <motion.div id="work" className="w-fit min-w-fit h-1/2 pr-20   ">
          <div id="img_container">
            <img
              src="images\placeholder.jpg"
              alt="placeholder"
              className="w-full h-80"
            />
          </div>
          <div id="work_info" className="w-3/4 h-1/2 my-2">
            <div id="work_info_header" className="flex items-center">
              <p className="tracking-widest">Project Name | Project Owner</p>
            </div>
          </div>
          <div
            id="work_info_header_divider"
            className="w-full h-[.1em] bg-slate-400 rounded"
          />
          <div id="work_info_body" className="my-2">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor, odio eget sollicitudin aliquet, justo odio lacinia nisl,
              sit amet varius libero turpis vel nisl. Nullam non purus
              consectetur, auctor nisl id, auctor nunc. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam.
            </p>
          </div>
        </motion.div>
        <motion.div id="work" className="w-fit min-w-fit h-1/2 pr-20   ">
          <div id="img_container">
            <img
              src="images\placeholder.jpg"
              alt="placeholder"
              className="w-full h-80"
            />
          </div>
          <div id="work_info" className="w-3/4 h-1/2 my-2">
            <div id="work_info_header" className="flex items-center">
              <p className="tracking-widest">Project Name | Project Owner</p>
            </div>
          </div>
          <div
            id="work_info_header_divider"
            className="w-full h-[.1em] bg-slate-400 rounded"
          />
          <div id="work_info_body" className="my-2">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor, odio eget sollicitudin aliquet, justo odio lacinia nisl,
              sit amet varius libero turpis vel nisl. Nullam non purus
              consectetur, auctor nisl id, auctor nunc. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam.
            </p>
          </div>
        </motion.div>
        <motion.div id="work" className="w-fit min-w-fit h-1/2 pr-20  ">
          <div id="img_container">
            <img
              src="images\placeholder.jpg"
              alt="placeholder"
              className="w-full h-80"
            />
          </div>
          <div id="work_info" className="w-3/4 h-1/2 my-2">
            <div id="work_info_header" className="flex items-center">
              <p className="tracking-widest">Project Name | Project Owner</p>
            </div>
          </div>
          <div
            id="work_info_header_divider"
            className="w-full h-[.1em] bg-slate-400 rounded"
          />
          <div id="work_info_body" className="my-2">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor, odio eget sollicitudin aliquet, justo odio lacinia nisl,
              sit amet varius libero turpis vel nisl. Nullam non purus
              consectetur, auctor nisl id, auctor nunc. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam. Nulla facilisi. Nullam
              eget nunc vel libero tincidunt aliquam.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div id="workpage_indicator" className="flex justify-center mt-4">
        <div
          id="workpage_indicator_dot"
          onClick={() => setWorkIndex(0)}
          className={`w-2 h-2 rounded-full mx-1 ${
            workIndex === 0 ? "bg-slate-400" : "bg-slate-200"
          }`}
        />
        <div
          id="workpage_indicator_dot"
          onClick={() => setWorkIndex(1)}
          className={`w-2 h-2 rounded-full mx-1 ${
            workIndex === 1 ? "bg-slate-400" : "bg-slate-200"
          }`}
        />
        <div
          id="workpage_indicator_dot"
          onClick={() => setWorkIndex(2)}
          className={`w-2 h-2 rounded-full mx-1 ${
            workIndex === 2 ? "bg-slate-400" : "bg-slate-200"
          }`}
        />
      </motion.div>
    </PageContainer>
  );
};

export default Work;
