// this comtains the data we are gonna for AboutMe component and slider component

import { PortfolioDataType } from "@/Types/Types";

export const AboutData = [
  {
    count: 1,
    title: "Programming Language Proficencies",
    img: "/first.svg",
    array: [
      "Python",
      "Javascript / TypeScript",
      "HTML",
      "CSS / Tailwind",
      "C#",
      "PHP",
    ],
  },
  {
    count: 2,
    title: "Back-End Proficiencies",
    img: "/third.svg",
    array: [
      "NodeJS / Express.js",
      "REST API's",
      "MongoDB / MySQL / MSSQL",
      "ASP.Net",
      "AWS API Gateway",
      "AWS Lambda",
      "AWS S3",
      "ZOHO CRM Development",
      "Serverless Development",
      "Cloud Development",
    ],
  },
  {
    count: 3,
    title: "Front-End Frameworks",
    img: "/second.svg",
    array: ["Next.js", "React.js", "Vue.js", "ASP.Net"],
  },

  {
    count: 4,
    title: "CMS and Headless CMS",
    img: "/fifth.svg",
    array: [
      "Contentful",
      "Strapi",
      "WordPress Theme Development",
      "WordPress Plugin Development",
      "Wordpress Maintenance",
    ],
  },
];

// this is for the slider
export const DataArray: PortfolioDataType[] = [
  {
    title: "ECommerce App",
    name: "Shop Shop",
    repo: "https://github.com/beamchristian/shop-shop-redux",
    des: "Shop-Shop is a modern and user-friendly e-commerce site that lets you browse and buy a variety of products online. You can create an account, add items to your cart, and securely checkout with Stripe.",
    des1: "Shop-Shop is built with the MERN stack (MongoDB, Express, React, and Node.js), and uses Apollo GraphQL and Redux for state management. It also supports offline functionality with IndexedDB, so you can shop anytime, anywhere.",
    skills: ["React.js", "Redux", "MongoDB", "Javascript", "GraphQL"],
    images: ["/shop-shop.jpg"],
  },
  {
    title: "Book Search Engine",
    name: "Book Search Engine",
    repo: "https://github.com/beamchristian/book-search-graphql-refactor",
    des: "Book Search Engine is a web application that allows users to find and save books of their interest.",
    des1: "Book Search Engine is built with the MERN stack, which consists of MongoDB, Express.js, React.js, Node.js and is a SPA (Single Page Application) ",
    skills: ["React", "MongoDB", "Express.js", "Javascript"],
    images: ["/book-search-engine.jpg"],
  },
  {
    title: "A Tech Blog",
    name: "Deep Thoughts",
    repo: "https://github.com/beamchristian/deep-thoughts",
    des: "Deep Thoughts is a unique platform where users can share their thoughts, ideas, and musings with a community of like-minded individuals.",
    des1: "It's designed to be a space for thoughtful discourse and intellectual exchange, a place where users can delve into deep discussions and explore complex ideas.",
    skills: ["React", "MongoDB", "Express.js", "Javascript"],
    images: ["/deep-thoughts.jpg"],
  },
  {
    title: "Platformer game written in C#",
    name: "Leap To Live",
    repo: "https://github.com/beamchristian/Leap-To-Live",
    des: "Meticulously crafted using the powerful Unity Game Engine and the versatile programming language, C#.",
    des1: "Every level in Leap To Live is a unique labyrinth of threats and obstacles, demanding agility, quick thinking, and precision from the player.",
    skills: ["C#", "Unity", "Game Design"],
    images: ["/leap-to-live.png"],
  },
  {
    title: "A Pizza customization App",
    name: "Pizza Hunt",
    repo: "https://github.com/beamchristian/pizza-hunt",
    des: "Pizza Hunt is a full-stack NoSQL application that provides a platform for pizza lovers to store and share their favorite pizza combinations with the world.",
    des1: "Pizza Hunt is built using MongoDB and Express with a RESTful API",
    skills: ["MongoDB", "Express.js", "Javascript"],
    images: ["/pizza-hunt.jpg"],
  },
];
