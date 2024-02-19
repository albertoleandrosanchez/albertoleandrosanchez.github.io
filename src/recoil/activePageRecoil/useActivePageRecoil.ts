import { activePageRecoil } from "./atom";
import { useRecoilState } from "recoil";
const useActivePageRecoil = () => {
  const [activePage, setActivePage] = useRecoilState(activePageRecoil);
  const setActivePageRecoil = (page: string) => {
    setActivePage(page);
  };
  return { activePage, setActivePageRecoil };
};

export default useActivePageRecoil;
