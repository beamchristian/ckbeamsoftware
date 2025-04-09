// this comtains the data we are gonna for AboutMe component and slider component

import { PortfolioItem } from "@/Types/Types";

export const AboutData = [
  {
    count: 1,
    title: "UI / UX Designer",
    img: "/first.svg",
    array: [
      "Information Architecture",
      "Pen and Paper",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Framer",
      "Typography / Spacing / ...",
    ],
  },
  {
    count: 2,
    title: "Front-end Developer",
    img: "/second.svg",
    array: [
      "HTML / CSS3",
      "javaScript (ES6)",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "REST API / GraphQL",
    ],
  },
  {
    count: 3,
    title: "Back-end Developer",
    img: "/third.svg",
    array: [
      "NodeJS / Express.js",
      "MongoDB / MySQL / MSSQL",
      "Next.js (API)",
      "PHP",
      "WordPress Theme Dev",
      "WordPress Plugin Dev.",
      "ASP (Once upon a time)",
    ],
  },
  {
    count: 4,
    title: "DevOps and Admin",
    img: "/fourth.svg",
    array: [
      "Docker / CI CD",
      "Apache / Nginx",
      "CentOS / Ubuntu",
      "Windows Server / IIS",
      "Mail Servers / DNS Servers",
      "Firewalls / Security",
      "VMWare ESXi",
    ],
  },
  {
    count: 5,
    title: "CMS and Headless CMS",
    img: "/fifth.svg",
    array: [
      "Contentful",
      "GraphCMS",
      "Strapi",
      "WordPress (Gutenberg)",
      "Directus",
      "Sanity",
      "SiteBaan (My Own)",
    ],
  },
  {
    count: 6,
    title: "Tools and Things",
    img: "/sisxth.svg",
    array: [
      "VSCode",
      "Git / Github",
      "Bash / Powershell",
      "NPM / Yarn",
      "Plesk Control Panel",
      "Vercel / Stormkit / Netlify",
      "Postman / Insomnia",
    ],
  },
];

// this is for the slider
export const DataArray: PortfolioItem[] = [
  {
    title: "ECommerce App",
    name: "Shop Shop",
    repo: "https://github.com/beamchristian/shop-shop-redux",
    des: "Shop-Shop is a modern and user-friendly e-commerce site that lets you browse and buy a variety of products online. You can create an account, add items to your cart, and securely checkout with Stripe.",
    des1: "Shop-Shop is built with the MERN stack (MongoDB, Express, React, and Node.js), and uses Apollo GraphQL and Redux for state management. It also supports offline functionality with IndexedDB, so you can shop anytime, anywhere.",
    images: ["/shop-shop.jpg"],
  },
  {
    title: "An app that helps you find your next book!",
    name: "Book Search Engine",
    repo: "https://github.com/beamchristian/book-search-graphql-refactor",
    des: "Book Search Engine is a web application that allows users to find and save books of their interest.",
    des1: "Book Search Engine is built with the MERN stack, which consists of MongoDB, Express.js, React.js, Node.js and is a SPA (Single Page Application) ",

    images: ["/book-search-engine.jpg"],
  },
  {
    title: "A Tech Blog",
    name: "Deep Thoughts",
    repo: "https://github.com/beamchristian/deep-thoughts",
    des: "Deep Thoughts is a unique platform where users can share their thoughts, ideas, and musings with a community of like-minded individuals.",
    des1: "It's designed to be a space for thoughtful discourse and intellectual exchange, a place where users can delve into deep discussions and explore complex ideas.",

    images: ["/deep-thoughts.jpg"],
  },
  {
    title: "A Platformer created with the Unity Game Engine",
    name: "Leap To Live",
    repo: "https://github.com/beamchristian/Leap-To-Live",
    des: "meticulously crafted using the powerful Unity Game Engine and the versatile programming language, C#.",
    des1: "Every level in Leap To Live is a unique labyrinth of threats and obstacles, demanding agility, quick thinking, and precision from the player.",

    images: ["/leap-to-live.png"],
  },
  {
    title: "A Pizza customization App",
    name: "Pizza Hunt",
    repo: "https://github.com/beamchristian/pizza-hunt",
    des: "Pizza Hunt is a full-stack NoSQL application that provides a platform for pizza lovers to store and share their favorite pizza combinations with the world.",
    des1: "Pizza Hunt is built using MongoDB and Express with a RESTful API",
    images: ["/pizza-hunt.jpg"],
  },
];
