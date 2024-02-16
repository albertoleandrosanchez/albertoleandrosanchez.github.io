import { SkillItemProps } from "@/pages/About/components/SkillItem/SkillItem";

export const work = {
  title: "Trabajo",
  subtitle: "Estos son algunos de los proyectos en los que he trabajado",
  content: {
    works: [
      {
        project_name: "Ambiente Controlado",
        project_owner: "Adox S.A.",
        project_image: ["/images/placeholder.jpg"],
        proyect_role: ["Fullstack Developer", "DevOps"],
        project_description:
          "Sistema de gestion de sensores de ambiente, con la capacidad de visualizar los datos generar reportes y alertas,.",
        proyect_url: "https://ambientecontrolado.com.ar",
        proyect_technologies: ["React", "Node", "MongoDB"],
      },
      {
        project_name: "Cleantrace",
        project_owner: "Adox S.A.",
        proyect_role: [
          "Web Developer",
          "Mobile Developer (React Native)",
          "DevOps",
        ],
        project_image: ["/images/placeholder.jpg"],
        project_description:
          "Sistema de trazabilidad de limpiezas realizadas en establecimientos de salud. App movil y web.",
      },
    ],
  },
};

export const about = {
  title: "Acerca de mi",
  subtitle: "Soy un desarrollador web fullstack",
  content: {
    about_me: {
      imgs: ["/images/placeholder.jpg"],
      description: [
        "Soy Técnico informático graduado con más de 2 años y medio de experiencia en desarrollo web, apasionado por crear soluciones digitales que sean eficientes, escalables y fáciles de usar.",
        "Soy una persona proactiva, responsable y con un gran interés por la tecnología. Me gusta trabajar en equipo y estoy siempre dispuesto a aprender cosas nuevas.",
        "Disfruto participar de eventos, aparte de los eventos del trabajo también he participado de orador en un evento de la Universidad Nacional de Hurlingham.",
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
              title: "HTML5",
              icon: "fab fa-html5",
              level: "Basico",
            },
            {
              title: "CSS3",
              icon: "fab fa-css3-alt",
              level: "Avanzado",
            },
            {
              title: "JavaScript",
              icon: "fab fa-js",
              level: "Avanzado",
            },
            {
              title: "React",
              icon: "fab fa-react",
              level: "Intermedio-Avanzado",
            },
            {
              title: "Next.Js",
              icon: "fab fa-vuejs",
              level: "Intermedio",
            },
            {
              title: "Tailwind",
              icon: "fab fa-sass",
              level: "Intermedio",
            },
          ] as SkillItemProps[],
        },
        {
          title: "Backend",
          skills: [
            {
              title: "Node",
              icon: "fab fa-node",
              level: "Intermedio",
            },
            {
              title: "Express",
              icon: "fas fa-server",
              level: "Intermedio",
            },
            {
              title: "MongoDB",
              icon: "fas fa-database",
              level: "Intermedio",
            },
            {
              title: "SQL",
              icon: "fas fa-database",
              level: "Basico",
            },
          ] as SkillItemProps[],
        },
      ],
    },
  },
};
