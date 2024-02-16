import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const Content = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory">
      <Home id="Home" className="snap-start" />
      <Work id="Work" className="snap-start" />
      <About id="About" className="snap-start" />
      <Contact id="Contact" className="snap-start" />
    </div>
  );
};

export default Content;
