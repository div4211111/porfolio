import { LanguagesType } from "./codeSnippetData";

export const ProjectType = {
  react: "react",
  vue: "vue",
  nextjs: "nextjs",
  nestjs: "nestjs",
  redux: "redux",
  mongodb: "mongodb",
  porstgresql: "porstgresql",
  nodejs: "nodejs",
} as const;
export type ProjectType = typeof ProjectType[keyof typeof ProjectType];
export const projectTypes = {
  react: "react",
  vue: "vue",
  nextjs: "nextjs",
  nestjs: "nestjs",
  redux: "redux",
  mongodb: "mongodb",
  porstgresql: "porstgresql",
  nodejs: "nodejs",
};

export interface IProjectData {
  name: string;
  img: string;
  description: Record<LanguagesType, string>;
  type: ProjectType[];
  linkGitHub: string;
  linkDemo: string;
}
export const projectData: IProjectData[] = [
  {
    name: "DivTyperClient",
    img: "/DivTyper.webp",
    description: {
      en: "DivTyperClient is the client-side application for measuring a user's typing speed and managing user authentication. This project is built with Next.js.",
      ru: "DivTyperClient — это клиентское приложение для измерения скорости печати пользователя и управления аутентификацией пользователя. Этот проект создан с помощью Next.js.",
    },
    type: [ProjectType.react, ProjectType.nextjs],
    linkGitHub: "https://github.com/div4211111/div-typer-client",
    linkDemo: "",
  },
  {
    name: "DivTyperAPI",
    img: "/cover6.webp",
    description: {
      en: "DivTyperApi is a RESTful API for measuring a user's typing speed and managing user authentication. This API is built with Nest.js and PostgreSQL.",
      ru: "DivTyperApi — это RESTful API для измерения скорости печати пользователя и управления аутентификацией пользователей. Этот API создан с помощью Nest.js и PostgreSQL.",
    },
    type: [ProjectType.nestjs, ProjectType.porstgresql],
    linkGitHub: "https://github.com/div4211111/div-typer-api",
    linkDemo: "",
  },
  {
    name: "Music app",
    img: "/cover10.webp",
    description: {
      en: "This web application enables users to browse upcoming concerts, view event details, check ticket availability, and book tickets. It's a convenient platform for music lovers to keep track of upcoming events and easily secure their seats for desired concerts.",
      ru: "Это веб-приложение позволяет пользователям просматривать предстоящие концерты, просматривать информацию о мероприятиях, проверять наличие билетов и бронировать билеты. Это удобная платформа для любителей музыки, чтобы следить за предстоящими событиями и легко бронировать места на желаемые концерты.",
    },
    type: [ProjectType.react, ProjectType.redux],
    linkGitHub: "https://github.com/div4211111/music-app",
    linkDemo: "",
  },
  {
    name: "DuizzServer",
    img: "/cover7.webp",
    description: {
      en: "DuizzServer is the API backend for the Duizz website, a quiz game platform. This API provides user authentication, CRUD operations with users, quizzes, categories, and quiz results, scoring for quizzes, and full API documentation in the OpenAPI specification. The project is built using Nest.js, PostgreSQL, and Prisma.",
      ru: "DuizzServer — это серверная часть API для веб-сайта Duizz, игровой платформы для викторин. Этот API обеспечивает аутентификацию пользователей, операции CRUD с пользователями, викторины, категории и результаты викторин, подсчет очков за викторины и полную документацию по API в OpenAPI. спецификация. Проект построен с использованием Nest.js, PostgreSQL и Prisma.",
    },
    type: [ProjectType.nestjs, ProjectType.porstgresql],
    linkGitHub: "https://github.com/div4211111/DuizzServer",
    linkDemo: "",
  },
  {
    name: "KamazYMZCMS",
    img: "/cover5.webp",
    description: {
      en: "KamazYMZCMS is a Content Management System (CMS) built with Strapi. It provides a powerful and flexible backend to manage content for your web or mobile applications.",
      ru: "KamazYMZCMS — это система управления контентом (CMS), созданная с помощью Strapi. Она предоставляет мощный и гибкий бэкэнд для управления контентом для ваших веб-приложений или мобильных приложений.",
    },
    type: [ProjectType.nodejs],
    linkGitHub: "https://github.com/div4211111/KamazYMZCMS",
    linkDemo: "",
  },
  {
    name: "KamazYMZClient",
    img: "/cover8.webp",
    description: {
      en: "This is the client-side of KamazYMZ built using Next.js.",
      ru: "Это клиентская часть КамазЮМЗ, построенная с использованием Next.js.",
    },
    type: [ProjectType.react, ProjectType.nextjs],
    linkGitHub: "https://github.com/div4211111/KamazYMZCilent",
    linkDemo: "",
  },
  {
    name: "Pollify",
    img: "/Pollify.webp",
    description: {
      en: "Pollify is an app that allows you to create and participate in private polls with your friends, customizing each poll and automatically calculating results with a second round of voting if necessary, to ensure the most popular option among all participants.",
      ru: "Pollify — это приложение, которое позволяет вам создавать частные опросы и участвовать в них с друзьями, настраивая каждый опрос и автоматически подсчитывая результаты со вторым туром голосования, если это необходимо, чтобы обеспечить наиболее популярный вариант среди всех участников.",
    },
    type: [ProjectType.react, ProjectType.nestjs],
    linkGitHub: "https://github.com/div4211111/Pollify",
    linkDemo: "",
  },
  {
    name: "Twitter clone",
    img: "/cover9.webp",
    description: {
      en: "This is a Twitter clone built using the Nuxt.js framework and powered by Prisma for database connectivity. It includes features such as posting tweets, liking and commenting on tweets, and following other users.",
      ru: 'Это клон Twitter, созданный с использованием фреймворка Nuxt.js и поддерживаемый Prisma для подключения к базе данных. Он включает в себя такие функции, как публикация твитов, отметка "Нравится" и комментирование твитов, а также подписка на других пользователей.',
    },
    type: [ProjectType.vue, ProjectType.mongodb],
    linkGitHub: "https://github.com/div4211111/vue-twitter-clone",
    linkDemo: "",
  },
];
