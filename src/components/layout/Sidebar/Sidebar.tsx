import "./Sidebar.css";

const Sidebar = () => {
  const pages = ["main", "work", "about", "contact"];
  return (
    <div id="sidebar" className="hidden lg:block">
      <div
        className=" w-40 h-screen bg-slate-200 flex flex-col 
          justify-between 
          items-center "
      >
        <ul
          className="
            flex 
            flex-col 
            justify-center 
            items-center 
            h-1/2
        "
        >
          {pages.map((page) => {
            return (
              <li
                key={page}
                className="cursor-pointer h-4 mb-4"
                onClick={() => {
                  console.log(page);
                  const element = document.getElementById(page);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <a href={`#${page}`}>
                  <span className="item"></span>
                </a>
              </li>
            );
          })}
        </ul>
        <div id="arrowdown-container" className="h-1/2">
          a
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
