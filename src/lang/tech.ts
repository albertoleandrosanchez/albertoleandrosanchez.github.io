export const techs = {
  javascript: {
    name: "JavaScript",
    icon: "fab fa-js",
  },
  react: {
    name: "React",
    icon: "fab fa-react",
  },
  next: {
    name: "Next.Js",
    icon: "fab fa-vuejs",
  },
  tailwind: {
    name: "Tailwind",
    icon: "fab fa-sass",
  },
  node: {
    name: "Node",
    icon: "fab fa-node",
  },
  express: {
    name: "Express",
    icon: "fas fa-server",
  },
  mongodb: {
    name: "MongoDB",
    icon: "fas fa-database",
  },
  sql: {
    name: "SQL",
    icon: "fas fa-database",
  },
  docker: {
    name: "Docker",
    icon: "fab fa-docker",
  },
  typescript: {
    name: "TypeScript",
    icon: "fab fa-js",
  },
  framer: {
    name: "Framer Motion",
    icon: "fab fa-react",
  },
  html: {
    name: "HTML",
    icon: "fab fa-html5",
  },
  css: {
    name: "CSS",
    icon: "fab fa-css3",
  },
  sass: {
    name: "Sass",
    icon: "fab fa-sass",
  },
  vue: {
    name: "Vue",
    icon: "fab fa-vuejs",
  },
  angular: {
    name: "Angular",
    icon: "fab fa-angular",
  },
  github: {
    name: "GitHub",
    icon: "fab fa-github",
  },
  mysql: {
    name: "MySQL",
    icon: "fas fa-database",
  },
  nginx: {
    name: "Nginx",
    icon: "fas fa-server",
  },
  aws: {
    name: "AWS",
    icon: "fab fa-aws",
  },
  linux: {
    name: "Linux",
    icon: "fab fa-linux",
  },
  python: {
    name: "Python",
    icon: "fab fa-python",
  },
  django: {
    name: "Django",
    icon: "fab fa-python",
  },
  git: {
    name: "Git",
    icon: "fa-brands fa-git-alt",
  },
};

export type TechKeys = keyof typeof techs;
export type Tech = (typeof techs)[TechKeys];
