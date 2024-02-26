import { activePageRecoil } from "./atom";
import { useRecoilState } from "recoil";

export type activePageRecoilType = {
  activePage: activePageType;
  setActivePageRecoil: (page: activePageType) => void;
};

export type activePageType =
  | "home"
  | "work"
  | "about"
  | "contact"
  | "experience";

const useActivePageRecoil = () => {
  const [activePage, setActivePage] =
    useRecoilState<activePageType>(activePageRecoil);
  const setActivePageRecoil = (page: activePageType) => {
    setActivePage(page);
  };
  return { activePage, setActivePageRecoil };
};

export default useActivePageRecoil;
