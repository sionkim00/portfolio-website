import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import cryptoImg from "@/public/crypto_app_preview.png";
import licenseImg from "@/public/license.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Engineering Intern",
    location: "Penta Systems Technology Inc. (Seoul, KR)",
    description: [
      "Engineered an end-to-end machine learning solution for license plate recognition utilizing Dataiku",
      "Crafted a web scraping application using Playwright, managed workflows with Apache Airflow, and integrated data storage with MySQL",
      "Led internal research on Computer Vision and stayed abreast of cutting-edge deep learning advancements",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 May - Aug",
  },
  {
    title: "Audio Visual Specialist",
    location: "Texas Christian University (Fort Worth, TX)",
    description: [
      "Managed and maintained A/V systems across diverse venues, offering technical assistance during conferences and university events",
      "Upheld A/V standards and protocols to ensure event security, while fostering a professional and welcoming atmosphere for all attendees",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022 Aug - Current",
  },
  {
    title: "KATUSA (Korean Augmentation to the United States Army)",
    location: "19th Expeditionary Sustainment Command (Camp Henry)",
    description: [
      "Played a pivotal role in intelligence gathering and analysis during three ROK-U.S. joint military exercises, directly aiding in the achievement of mission goals",
      "Bridged communication gaps between U.S. and South Korean teams by adeptly translating and interpreting both classified and unclassified documents and communications",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020 Jun - 2021 Dec",
  },
] as const;

export const projectsData = [
  {
    title: "Crypto Portfolio App",
    description:
      "Created a user-friendly crypto portfolio app using React Native, allowing users to seamlessly monitor and manage their cryptocurrency holdings.",
    tags: ["Javascript", "React Native", "REST API"],
    imageUrl: cryptoImg,
  },
  {
    title: "License Plate Recognition",
    description:
      "Engineered an automated system for license plate identification using Dataiku, Optical Character Recognition, and computer vision techniques.",
    tags: ["Computer Vision", "Dataiku", "Dataiku", "Python", "SQL"],
    imageUrl: licenseImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "C/C++",
  "JavaScript",
  "TypeScript",
  "Python",
  "Swift",
  "SQL",
  "Git",
  "Docker",
  "AWS",
] as const;
