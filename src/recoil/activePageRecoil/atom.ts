import { atom } from "recoil";
import { activePageType } from "./useActivePageRecoil";

export const activePageRecoil = atom<activePageType>({
  key: "activePageRecoil",
  default: "home",
});
