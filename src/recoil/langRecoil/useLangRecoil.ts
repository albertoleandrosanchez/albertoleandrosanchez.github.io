import { useRecoilValue, useSetRecoilState } from "recoil";
import { activePageRecoil } from "./atom";

export const useLangRecoil = () => {
  const lang = useRecoilValue(activePageRecoil);
  const setLang = useSetRecoilState(activePageRecoil);
  return { lang, setLang };
};
