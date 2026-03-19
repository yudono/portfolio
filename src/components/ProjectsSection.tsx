import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "Point of Sale (POS) System",
    description:
      "Developed a robust Point of Sale (POS) software using Java and NetBeans, featuring product management, sales tracking, invoice generation, and real-time reporting. Designed for efficient retail and inventory management.",
    image: "/images/pos-system.jpg",
    tags: ["Java", "NetBeans", "Desktop Application", "POS"],
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "2",
    title: "ItqanPeduli Fundraising",
    description:
      "Developed ItqanPeduli.com, a fundraising website built with Laravel featuring secure donation processing, campaign management, and real-time progress tracking.",
    image: "/images/itqan-peduli.jpg",
    tags: ["Laravel", "PHP", "MySQL", "Payment Integration"],
    liveUrl: "https://itqanpeduli.com",
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "3",
    title: "HuniAnyaman Property",
    description:
      "Created a WordPress-based property platform for HuniAnyaman.id with property listings, search functionality, and responsive design for optimal user experience.",
    image: "/images/hunianyaman.jpg",
    tags: ["WordPress", "PHP", "Property Platform", "Responsive Design"],
    liveUrl: "https://hunianyaman.id",
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "4",
    title: "Figma to HTML Landing Page",
    description:
      "Transformed Figma designs into pixel-perfect, responsive HTML landing pages using Tailwind CSS, ensuring design accuracy and cross-browser compatibility.",
    image: "/images/figma-landing.jpg",
    tags: ["HTML", "Tailwind CSS", "Figma", "Responsive Design"],
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "5",
    title: "Baitulmaal Muamalah Platform",
    description:
      "Developed a comprehensive fundraising platform for Baitulmaal Muamalah, implementing donation systems, campaign management, and real-time progress tracking.",
    image: "/images/baitulmaal.jpg",
    tags: ["Full Stack", "Laravel", "Server Admin", "Payment Gateway"],
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "6",
    title: "Blog & Forum Website",
    description:
      "Built a modern blog and forum platform using Next.js and Tailwind CSS, featuring interactive discussions, dynamic blog layouts, and optimized server-side rendering.",
    image: "/images/blog-forum.jpg",
    tags: ["Next.js", "Tailwind CSS", "React", "Full Stack"],
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "7",
    title: "Documind AI",
    description:
      "Documind AI is a platform that helps you to create and manage your documents using AI. ",
    image: "/images/documind-ai.png",
    tags: ["Next.js", "Tailwind CSS", "React", "Full Stack"],
    liveUrl: "https://documind.id",
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "8",
    title: "Whazapp AI Chatbot and Payment Automation",
    description:
      "Whazapp is an AI chatbot and payment automation platform that helps you to customer service and payment automation ",
    image: "/images/whazapp.png",
    tags: ["Next.js", "Tailwind CSS", "React", "Full Stack"],
    liveUrl: "https://whazapp.online",
    // githubUrl: "https://github.com/yudono",
  },
  {
    id: "9",
    title: "Yukasir modern POS",
    description:
      "Yukasir is a modern POS system that helps you to create and manage POS and inventory",
    image: "/images/yukasir.png",
    tags: ["Next.js", "Tailwind CSS", "React", "Full Stack"],
    // liveUrl: "https://yukasir.com",
  },
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Extract unique tags from all projects
  const allTags = [
    "All",
    ...Array.from(new Set(projectsData.flatMap((project) => project.tags))),
  ];

  // Filter projects based on selected tag
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={14} className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
