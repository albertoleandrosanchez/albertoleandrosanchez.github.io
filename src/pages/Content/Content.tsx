import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";

const Content = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <Home id="Home" className="snap-start" />
      <Work id="Work" className="snap-start" />
      <About id="About" className="snap-start" />
      {/*<Contact /> */}
    </div>
  );
};

export default Content;
