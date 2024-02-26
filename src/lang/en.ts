import { SkillItemProps } from "@/pages/About/components/SkillItem/SkillItem";
import { TechKeys, techs } from "./tech";

export const work = {
  title: "Work",
  subtitle: "These are some of the projects I have worked on",
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
          "gestion system of environment sensors, with the ability to visualize the data, generate reports and alerts.",
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
          "Traceability system of cleanings carried out in health establishments. Mobile app and web.",
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
  title: "About me",
  subtitle: "I'm a fullstack web developer",
  content: {
    about_me: {
      imgs: [
        "src/assets/img/CT_1.png",
        "src/assets/img/CT_2.png",
        "src/assets/img/CT_3.png",
      ],
      description: [
        "I am a graduated computer technician with more than 2 and a half years of experience in web development, passionate about creating digital solutions that are efficient, scalable and user-friendly.",
        "I am a proactive, responsible person with a great interest in technology. I enjoy working in a team and I am always willing to learn new things.",
        "I enjoy participating in events. Besides work events, I have also participated as a speaker at an event at the Universidad Nacional de Hurlingham.",
      ],
    },
    education_content: {
      title: "Education",
      education: [
        {
          title: "Universitary copmuter technician degree",
          place: "Universidad Nacional de Hurlingham",
          description: "Graduate in 2023",
        },
        {
          title: "English course",
          place: "Instituto de ingles S.I.A.I.D.E.I",
          description: "B2 level",
        },
      ],
    },
    experience_content: {
      title: "Experience",
      experience: [
        {
          title: "Fullstack Web Developer",
          place: "Adox S.A.",
          description: "web app, mobile, DevOps y Backend Developmen",
        },
        {
          title: "Assistant in the subject of 'Introduction to Programming'",
          place: "Universidad Nacional de Hurlingham",
          description:
            "I helped the teacher in the subject of 'Introduction to Programming' in the career of Computer Technician.",
        },
      ],
    },
    skill_content: {
      title: "Skills",
      subtitle: "These are some of the technologies I have worked with",
      skills: [
        {
          title: "Frontend",
          skills: [
            {
              ...techs.html,
              level: "Advanced",
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
  title: "Contact me",
  subtitle: "You can contact me through my email",
  subtitle2: "You can also find me  other social networks",
  subtitle3: "Or filling out the form below",

  content: {
    contact_info: {
      email: "albertoleandrosanchez@gmail.com",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
    },
  },
};

export default {
  work,
  about,
  contact,
};
