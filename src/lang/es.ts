import { SkillItemProps } from "@/pages/About/components/SkillItem/SkillItem";
import { TechKeys, techs } from "./tech";

export interface Network {
  name: string;
  url: string;
  icon: string;
}
export type NetworkKeys = typeof networks;

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

export const work = {
  title: "Trabajo",
  subtitle: "Estos son algunos de los proyectos en los que he trabajado",
  content: {
    works: [
      {
        project_name: "Ambiente Controlado",
        project_owner: "Adox S.A.",
        project_image: [
          "/images/work/AC_1.png",
          "/images/work/AC_2.png",
          "/images/work/AC_3.png",
        ],
        proyect_role: ["Fullstack Developer", "DevOps"],
        project_description:
          "Sistema de gestion de sensores de ambiente, con la capacidad de visualizar los datos generar reportes y alertas,.",
        proyect_url: "https://ambientecontrolado.com.ar",
        proyect_technologies: [
          "react",
          "node",
          "mongodb",
          "docker",
          "html",
          "css",
          "javascript",
        ],
      },
      {
        project_name: "Cleantrace",
        project_owner: "Adox S.A.",
        project_image: [
          "/images/work/CT_1.png",
          "/images/work/CT_2.png",
          "/images/work/CT_3.png",
        ],
        proyect_role: [
          "Web Developer",
          "Mobile Developer (React Native)",
          "DevOps",
        ],
        project_description:
          "Sistema de trazabilidad de limpiezas realizadas en establecimientos de salud. App movil y web.",
        proyect_url: "https://cleantrace.demoadox.com",
        proyect_technologies: ["react", "node", "mongodb"],
      },
    ] as {
      project_name: string;
      project_owner: string;
      project_image: string[];
      proyect_role: string[];
      project_description: string;
      proyect_url?: string;
      proyect_technologies: TechKeys[];
    }[],
  },
};

export const about = {
  title: "Acerca de mi",
  subtitle: "Soy un desarrollador web fullstack",
  content: {
    about_me: {
      imgs: [
        "src/assets/img/CT_1.png",
        "src/assets/img/CT_2.png",
        "src/assets/img/CT_3.png",
      ],
      description: [
        "Soy Técnico informático graduado con más de 2 años y medio de experiencia en desarrollo web, apasionado por crear soluciones digitales que sean eficientes, escalables y fáciles de usar.",
        "Soy una persona proactiva, responsable y con un gran interés por la tecnología. Me gusta trabajar en equipo y estoy siempre dispuesto a aprender cosas nuevas.",
        "Disfruto participar de eventos, aparte de los eventos del trabajo también he participado de orador en un evento de la Universidad Nacional de Hurlingham.",
      ],
    },
    education_content: {
      title: "Educación",
      education: [
        {
          title: "Técnico Universitario en Informática",
          place: "Universidad Nacional de Hurlingham",
          description: "Graduado en 2023",
        },
        {
          title: "Curso de Ingles",
          place: "Instituto de ingles S.I.A.I.D.E.I",
          description: "Nivel B2",
        },
      ],
    },
    experience_content: {
      title: "Experiencia",
      experience: [
        {
          title: "Desarrollador Web Fullstack",
          place: "Adox S.A.",
          description:
            "Desarrollo de aplicaciones web, moviles, DevOps y Backend",
        },
        {
          title: "Estudiante Asistente",
          place: "Universidad Nacional de Hurlingham",
          description:
            "Asistente en la materia de 'Introduccion a la Programación' , ayudando a los estudiantes a comprender los conceptos basicos de la programación",
        },
      ],
    },
    skill_content: {
      title: "Habilidades",
      subtitle: "Estas son algunas de las tecnologías con las que trabajo",
      skills: [
        {
          title: "Frontend",
          skills: [
            {
              ...techs.html,
              level: "Avanzado",
            },
            {
              ...techs.css,
              level: "Avanzado",
            },
            {
              ...techs.javascript,
              level: "Intermedio-Avanzado",
            },
            {
              ...techs.react,
              level: "Intermedio-Avanzado",
            },
            {
              ...techs.next,
              level: "Intermedio",
            },
            {
              ...techs.tailwind,
              level: "Intermedio",
            },
          ] as SkillItemProps[],
        },
        {
          title: "Backend",
          skills: [
            {
              ...techs.node,
              level: "Intermedio",
            },
            {
              ...techs.express,
              level: "Intermedio",
            },
            {
              ...techs.mongodb,
              level: "Intermedio",
            },
            {
              ...techs.mysql,
              level: "Basico-Intermedio",
            },
          ] as SkillItemProps[],
        },
        {
          title: "DevOps",
          skills: [
            {
              ...techs.docker,
              level: "Basico-Intermedio",
            },
            {
              ...techs.nginx,
              level: "Basico",
            },
            {
              ...techs.linux,
              level: "Basico",
            },
            {
              ...techs.git,
              level: "Avanzado",
            },
            {
              ...techs.github,
              level: "Avanzado",
            },
          ] as SkillItemProps[],
        },
      ],
    },
  },
};

export const contact = {
  title: "Contacto",
  subtitle: "me puedes contactar enviandome un email a mi correo electronico",
  subtitle2: "Tambien puedes contactarme a traves de mis otras redes",
  subtitle3: "o llenando el siguiente formulario",

  content: {
    contact_info: {
      email: "albertoleandrosanchez@gmail.com",
    },
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar",
    },
  },
};
