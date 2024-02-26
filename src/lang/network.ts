import { Network } from "@/interfaces/Network";

export const networks = {
  github: {
    name: "Github",
    url: "https://github.com/albertoleandrosanchez",
    icon: "fab fa-github",
  },
  linkedin: {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/albertoleandrosanchez",
    icon: "fa-brands fa-linkedin",
  },
} as { [key: string]: Network };
