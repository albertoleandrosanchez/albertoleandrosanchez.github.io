import { SkillItemProps } from "@/pages/About/components/SkillItem/SkillItem";

export const work = {
  // Title
  title: "Work",
  // Subtitle
  subtitle: "Here are some of the projects I've worked on",
  // Content
  content: {
    works: [
      {
        project_name: "Ambiente Controlado",
        project_owner: "Adox S.A.",
        project_image: ["/images/placeholder.jpg"],
        project_role: ["Fullstack Developer", "DevOps"],
        project_description:
          "Environmental sensor management system, with the ability to visualize data, generate reports and alerts.",
        project_url: "https://ambientecontrolado.com.ar",
        project_technologies: ["React", "Node", "MongoDB"],
      },
      {
        project_name: "Cleantrace",
        project_owner: "Adox S.A.",
        project_role: [
          "Web Developer",
          "Mobile Developer (React Native)",
          "DevOps",
        ],
        project_image: ["/images/placeholder.jpg"],
        project_description:
          "Cleaning traceability system for healthcare facilities. Mobile and web app.",
      },
    ],
  },
};

export const about = {
  // Title
  title: "About me",
  // Subtitle
  subtitle: "I am a fullstack web developer",
  // Content
  content: {
    about_me: {
      imgs: ["/images/placeholder.jpg"],
      description: [
        "I am a Computer Technician graduate with more than 2 and a half years of experience in web development, passionate about creating digital solutions that are efficient, scalable and easy to use.",
        "I am a proactive, responsible person with a great interest in technology. I like to work in a team and I am always willing to learn new things.",
        "I enjoy participating in events, apart from work events I have also participated as a speaker at an event at the Universidad Nacional de Hurlingham.",
      ],
    },

    skill_content: {
      title: "Skills",
      subtitle: "These are some of the technologies I work with",
      skills: [
        {
          title: "Frontend",
          skills: [
            {
              title: "HTML5",
              icon: "fab fa-html5",
              level: "Basic",
            },
            {
              title: "CSS3",
              icon: "fab fa-css3-alt",
              level: "Advanced",
            },
            {
              title: "JavaScript",
              icon: "fab fa-js",
              level: "Advanced",
            },
            {
              title: "React",
              icon: "fab fa-react",
              level: "Intermediate-Advanced",
            },
            {
              title: "Next.Js",
              icon: "fab fa-vuejs",
              level: "Intermediate",
            },
            {
              title: "Tailwind",
              icon: "fab fa-sass",
              level: "Intermediate",
            },
          ] as SkillItemProps[],
        },
        {
          title: "Backend",
          skills: [
            {
              title: "Node",
              icon: "fab fa-node",
              level: "Intermediate",
            },
            {
              title: "Express",
              icon: "fas fa-server",
              level: "Intermediate",
            },
            {
              title: "MongoDB",
              icon: "fas fa-database",
              level: "Intermediate",
            },
            {
              title: "SQL",
              icon: "fas fa-database",
              level: "Basic",
            },
          ] as SkillItemProps[],
        },
        {
          title: "DevOps",
          skills: [
            {
              title: "Docker",
              icon: "fab fa-docker",
              level: "Basic-Intermediate",
            },
            {
              title: "Kubernetes",
              icon: "fab fa-kubernetes",
              level: "Basic",
            },
            {
              title: "Git",
              icon: "fab fa-git-alt",
              level: "Advanced",
            },
            {
              title: "Github",
              icon: "fab fa-github",
              level: "Advanced",
            },
          ] as SkillItemProps[],
        },
      ],
    },
  },
};

export const contact = {
  title: "Contact",
  subtitle: "You can contact me by sending me an email",
  content: {
    contact_info: {
      email: "albertoleandrosanchez@gmail.com",
    },
    form: {
      description: "or by filling out the following form",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
    },
  },
};

// me podrias pasar todo esto a ingles por fav