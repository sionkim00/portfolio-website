"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm a <span className="font-medium">Computer Science</span> major
        at Texas Christian University with a deep-rooted passion for technology
        and innovation. After immersing myself in the world of programming, I've
        honed my skills in a core stack that includes{" "}
        <span className="underline">
          Data Engineering, iOS development, and Web Development
        </span>
        . The allure of coding for me lies in its intricate problem-solving
        nature. There's an unparalleled satisfaction in crafting a piece of code
        and watching it come to life, solving real-world challenges.
      </p>
      <p className="mb-3">
        As I approach the culmination of my academic journey, I'm eager to
        translate my theoretical knowledge into practical experience. With that
        goal in mind, I'm actively seeking{" "}
        <span className="font-medium">summer internships for 2024</span> where I
        can contribute, learn, and grow as a budding software developer.
      </p>
      <p className="mb-3">
        Outside the realm of coding, I cherish moments of relaxation and
        exploration. Whether it's diving into a gripping novel, trekking through
        nature trails, or jamming to my favorite tunes, I believe in balancing
        work with leisure. Continuous learning is a mantra I live by, and I'm
        always on the lookout for new skills and knowledge to acquire.
      </p>
    </motion.section>
  );
}
