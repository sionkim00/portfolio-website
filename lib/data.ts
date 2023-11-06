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
      "Built scalable data pipelines utilizing Playwright, Apache Airflow, and MySQL to scrape, orchestrate, and store data from 100+ websites monthly, improving data processing efficiency by 20%",
      "Led research initiatives on advanced computer vision algorithms and deep learning techniques to stay current on innovations in the field",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 May - Aug",
  },
  {
    title: "Audio Visual Specialist",
    location: "Texas Christian University (Fort Worth, TX)",
    description: [
      "Provided technical support and troubleshooting for audiovisual systems during conferences, lectures, and university events across diverse venues, fostering a professional and welcoming event experience",
      "Maintained audiovisual standards and protocols to ensure flawless execution of events",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2022 Aug - Current",
  },
  {
    title: "Human Resources Specialist, Intelligence (G2)",
    location: "19th Expeditionary Sustainment Command (Camp Henry)",
    description: [
      "Played a pivotal role in the collection, analysis, security, and dispensing of critical and sensitive intelligence data, directly aiding in the achievement of mission goals",
      "Translated data into actionable insights through advanced analysis techniques and data visualization, enhancing decision-making capabilities",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020 Jun - 2021 Dec",
  },
] as const;

export const projectsData = [
  {
    title: "Crypto Portfolio App",
    description:
      "Developed a user-friendly cryptocurrency portfolio mobile app using React Native that enables users to easily track and manage their crypto investments",
    tags: ["Javascript", "React Native", "REST API"],
    imageUrl: cryptoImg,
  },
  {
    title: "License Plate Recognition",
    description:
      "Developed an end-to-end data pipeline for license plate recognition using Python, leveraging computer vision and OCR algorithms",
    tags: ["Computer Vision", "ETL", "Python", "SQL", "Dataiku"],
    imageUrl: licenseImg,
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Java",
  "Javascript",
  "HTML/CSs",
  "React.js",
  "Node.js",
  "Next.js",
  "React Native",
  "Flask",
  "Swift",
  "SQL",
  "Git",
  "Docker",
  "AWS",
] as const;
