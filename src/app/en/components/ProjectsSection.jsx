"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A responsive portfolio built with React.js to showcase projects, skills, and experience with a clean and modern design.",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/React-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Full Stack Whatsapp Web Clone",
    description:
      "A full-featured WhatsApp Web clone with real-time messaging, video calls, and group chats, built using modern full-stack technologies, web hooks and firebase.",
    image: "/images/projects/whatsapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/Whatsapp-clone",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Full Stack Twitter (X) Clone",
    description:
      "A fully functional Twitter clone featuring tweet posting, likes, comments, and user profiles, built with a modern full-stack approach.",
    image: "/images/projects/twitter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/Twitter-clone",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Recepie Application",
    description:
      "An interactive application for discovering and searching recipes, featuring a dynamic search interface and real-time results, designed to inspire cooking enthusiasts.",
    image: "/images/projects/recepie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/Recepie-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Gym Membership Showcase Page",
    description:
      "A dynamic showcase page for a gym website that highlights classes, trainers, and membership options, designed to engage visitors and promote fitness programs.",
    image: "/images/projects/gym.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/Gym-Website",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Advanced Dashboard Project",
    description:
      "A comprehensive dashboard application built with full-stack technologies, featuring data visualization, user analytics, and customizable widgets for real-time insights and management.",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kagan-dev/Advanced-Dashboard",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Full-stack E-commerce Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Full-stack E-commerce Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Full-stack E-commerce Website",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;