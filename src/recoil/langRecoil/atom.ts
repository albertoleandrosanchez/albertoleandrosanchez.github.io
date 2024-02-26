import { atom } from "recoil";

export const activePageRecoil = atom<"en" | "es">({
  key: "langRecoil",
  default: "es",
});
