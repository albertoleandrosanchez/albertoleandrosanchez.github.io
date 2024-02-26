import { useRecoilValue, useSetRecoilState } from "recoil";
import { activePageRecoil } from "./atom";
import React, { useCallback, useEffect } from "react";
import es from "@/lang/es";
import en from "@/lang/en";

export const useLangRecoil = () => {
  const setLanguage = useSetRecoilState(activePageRecoil);
  const lang = useRecoilValue(activePageRecoil);
  const [langContent, setLangContent] = React.useState<() => any>(
    () => () => ({})
  );
  const setLang = useCallback(
    (lang: string) => {
      localStorage.setItem("lang", lang);
      setLanguage(lang as "es" | "en");
    },
    [setLanguage]
  );
  useEffect(() => {
    const lang_ = localStorage.getItem("lang");
    if (lang_) {
      setLang(lang_);
    }
  }, [setLang]);

  useEffect(() => {
    const fetch = async () => {
      setLangContent(() => () => lang === "es" ? es : en);
    };
    fetch();
  }, [lang]);

  return { lang, setLang, langContent };
};
