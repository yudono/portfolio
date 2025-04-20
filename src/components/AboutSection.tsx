import React from "react";
import Editor from "./Editor/Editor";

const initialAboutContent = [
  {
    id: "about-1",
    type: "heading",
    content: "About Me",
  },
  {
    id: "about-2",
    type: "text",
    content: `IT Enthusiast and Software Development Professional with a strong self-taught background in website development. I specialize in end-to-end software development processes, from design and prototyping to server deployment. Currently working as a Frontend Developer at Paideia Educational Solutions, where I focus on creating innovative web solutions.

I am committed to staying ahead of technological trends, constantly improving efficiency and effectiveness in application development. In addition to programming, I have experience in cloud server architecture, VPS setup, and application hosting. I also have an interest in UI/UX design and actively engage with the design community to enhance user-centric development practices.`,
  },
  {
    id: "about-3",
    type: "heading",
    content: "Professional Experience",
  },
  {
    id: "about-4",
    type: "list",
    content: `Frontend Developer at Paideia Educational Solutions - Sep 2022 to Present
• Leading frontend development initiatives and implementing modern web technologies
• Collaborating with cross-functional teams to deliver educational solutions
• Optimizing application performance and user experience

Full-stack Developer at PT Digital Agensi Nusantara - Sep 2021 to Present
• Developing and maintaining full-stack web applications
• Managing server infrastructure and deployment processes
• Implementing responsive design and ensuring cross-browser compatibility

Fullstack Developer at PT. Garuda Visi Nusantara - Jun 2020 to Sep 2021
• Created geospatial website platforms integrating Google Maps, OpenStreetMap, and Leaflet
• Collaborated using Visual Studio Live Share and Github for team development
• Implemented complex mapping features and data visualization

Internship at PT Trinindya - Mar 2019 to May 2019
• Developed full-stack websites using Laravel and CodeIgniter frameworks
• Gained hands-on experience with CodeIgniter HMVC architecture
• Participated in team development projects`,
  },
  {
    id: "about-5",
    type: "heading",
    content: "Education",
  },
  {
    id: "about-6",
    type: "list",
    content: `Master of Computer Applications (MCA) - Perguruan Tinggi Raharja Tangerang
• Specialization in Information Systems Management
• Expected graduation: August 2027
• Currently pursuing advanced studies in system architecture and management

Multimedia - SMKN 5 Kota Tangerang (2018 - 2020)
• Focused on digital media and multimedia development
• Developed strong foundation in visual design and content creation`,
  },
  {
    id: "about-7",
    type: "heading",
    content: "Technical Skills",
  },
  {
    id: "about-8",
    type: "list",
    content: `Programming Languages:
• Advanced: PHP, JavaScript, TypeScript
• Proficient: Python, Dart
• Experience with modern ES6+ features and type systems

Frameworks and Tools:
• Frontend: React.js, Vue.js (including Vue CLI), Next.js
• Backend: Laravel, CodeIgniter, Express
• Mobile: Flutter
• Version Control: Git, GitHub

Professional Focus Areas:
• Software Development: End-to-end planning, development, and deployment
• Server Management: Cloud and VPS infrastructure design
• UI/UX Design: User-centric design principles and implementation
• Continuous Integration: Automated testing and deployment workflows`,
  },
  {
    id: "about-7",
    type: "heading",
    content: "Certifications & Achievements",
  },
  {
    id: "about-9",
    type: "image",
    content: "/certificates/machine-learning-workshop.jpg",
    alt: "Machine Learning Workshop Certificate",
    caption:
      "Machine Learning Workshop Certificate - Universitas Raharja (2024)",
    className: "w-full max-w-lg mx-auto rounded-lg shadow-md",
  },
  {
    id: "about-10",
    type: "image",
    content: "/certificates/ef-set-english.jpg",
    alt: "EF SET English Certificate",
    caption:
      "EF SET English Certificate - B2 Upper Intermediate (Score: 53/100)",
    className: "w-full max-w-lg mx-auto rounded-lg shadow-md",
  },
  {
    id: "about-11",
    type: "image",
    content: "/certificates/inarisk-bnpb-hackathon.jpg",
    alt: "InaRisk BNPB Hackathon Certificate",
    caption: "InaRisk BNPB Hackathon 2021 - Mobile Apps Competition",
    className: "w-full max-w-lg mx-auto rounded-lg shadow-md",
  },
  {
    id: "about-12",
    type: "image",
    content: "/certificates/web-design-competition.jpg",
    alt: "Web Design Competition Certificate",
    caption: "Web Design Competition - Lomba Keterampilan Siswa SMK (2020)",
    className: "w-full max-w-lg mx-auto rounded-lg shadow-md",
  },
  {
    id: "about-12",
    type: "list",
    content: `Machine Learning Workshop Certificate - Universitas Raharja\nEF SET English Certificate - B2 Upper Intermediate (Score: 53/100)\nInaRisk BNPB Hackathon 2021 - Mobile Apps Competition\nWeb Design Competition - Lomba Keterampilan Siswa SMK`,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 sm:p-8 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <Editor
              initialBlocks={initialAboutContent}
              storageKey="about-content"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Perguruan Tinggi Raharja Tangerang
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2023 - 2027
                </p>
              </li>
              <li>
                <p className="font-medium">Multimedia</p>
                <p className="text-gray-600 dark:text-gray-400">
                  SMKN 5 Kota Tangerang
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2018 - 2020
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Machine Learning Workshop</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Universitas Raharja
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
              </li>
              <li>
                <p className="font-medium">EF SET English Certificate</p>
                <p className="text-gray-600 dark:text-gray-400">
                  B2 Upper Intermediate
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Score: 53/100
                </p>
              </li>
              <li>
                <p className="font-medium">InaRisk BNPB Hackathon</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Mobile Apps Competition
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
              </li>
              <li>
                <p className="font-medium">Web Design Competition</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Lomba Keterampilan Siswa SMK
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4">Current Role</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Frontend Developer</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Paideia Educational Solutions
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2022 - Present
                </p>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                  <li>Building responsive web applications</li>
                  <li>Implementing modern frontend practices</li>
                  <li>Creating interactive user interfaces</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
