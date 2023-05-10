export const ProjectType = {
  react: "react",
  vue: "vue",
  nextjs: "nextjs",
  nestjs: "nestjs",
  redux: "redux",
  mongodb: "mongodb",
  porstgresql: "porstgresql",
  nodejs: 'nodejs'
} as const;
export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];
export const projectTypes = {
  react: "react",
  vue: "vue",
  nextjs: "nextjs",
  nestjs: "nestjs",
  redux: "redux",
  mongodb: "mongodb",
  porstgresql: "porstgresql",
  nodejs: 'nodejs'
};

export interface IProjectData {
  name: string;
  img: string;
  description: string;
  type: ProjectType[];
  linkGitHub: string;
  linkDemo: string;
}
export const projectData: IProjectData[] = [
  {
    name: "DivTyperClient",
    img: "/DivTyper.webp",
    description:
      "DivTyperClient is the client-side application for measuring a user's typing speed and managing user authentication. This project is built with Next.js.",
    type: [
      ProjectType.react,
      ProjectType.nextjs,
    ],
    linkGitHub: "https://github.com/div4211111/div-typer-client",
    linkDemo: "",
  },
  {
    name: "DivTyperAPI",
    img: "/cover6.webp",
    description:
      "DivTyperApi is a RESTful API for measuring a user's typing speed and managing user authentication. This API is built with Nest.js and PostgreSQL.",
    type: [
      ProjectType.nestjs,
      ProjectType.porstgresql,
    ],
    linkGitHub: "https://github.com/div4211111/div-typer-api",
    linkDemo: "",
  },
  {
    name: "Music app",
    img: "/cover10.webp",
    description:
      "This web application enables users to browse upcoming concerts, view event details, check ticket availability, and book tickets. It's a convenient platform for music lovers to keep track of upcoming events and easily secure their seats for desired concerts.",
    type: [ProjectType.react, ProjectType.redux],
    linkGitHub: "https://github.com/div4211111/music-app",
    linkDemo: "",
  },
  {
    name: "DuizzServer",
    img: "/cover7.webp",
    description:
      "DuizzServer is the API backend for the Duizz website, a quiz game platform. This API provides user authentication, CRUD operations with users, quizzes, categories, and quiz results, scoring for quizzes, and full API documentation in the OpenAPI specification. The project is built using Nest.js, PostgreSQL, and Prisma.",
    type: [ProjectType.nestjs, ProjectType.porstgresql],
    linkGitHub: "https://github.com/div4211111/DuizzServer",
    linkDemo: "",
  },
  {
    name: "KamazYMZCMS",
    img: "/cover5.webp",
    description:
      "KamazYMZCMS is a Content Management System (CMS) built with Strapi. It provides a powerful and flexible backend to manage content for your web or mobile applications.",
    type: [ProjectType.nodejs],
    linkGitHub: "https://github.com/div4211111/KamazYMZCMS",
    linkDemo: "",
  },
  {
    name: "KamazYMZClient",
    img: "/cover8.webp",
    description:
      "This is the client-side of KamazYMZ built using Next.js.",
    type: [ProjectType.react, ProjectType.nextjs],
    linkGitHub: "https://github.com/div4211111/KamazYMZCilent",
    linkDemo: "",
  },
  {
    name: "Pollify",
    img: "/Pollify.webp",
    description:
      "Pollify is an app that allows you to create and participate in private polls with your friends, customizing each poll and automatically calculating results with a second round of voting if necessary, to ensure the most popular option among all participants.",
    type: [ProjectType.react, ProjectType.nestjs],
    linkGitHub: "https://github.com/div4211111/Pollify",
    linkDemo: "",
  },
  {
    name: "Twitter clone",
    img: "/cover9.webp",
    description:
      "This is a Twitter clone built using the Nuxt.js framework and powered by Prisma for database connectivity. It includes features such as posting tweets, liking and commenting on tweets, and following other users.",
    type: [ProjectType.vue, ProjectType.mongodb],
    linkGitHub: "https://github.com/div4211111/vue-twitter-clone",
    linkDemo: "",
  },

];
