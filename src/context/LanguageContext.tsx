import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  en: {
    about: "About Me",
    experience: "Professional Experience",
    education: "Education",
    skills: "Technical Skills",
    certifications: "Certifications & Achievements",
    currentRole: "Current Role",
    bachelor: "Bachelor's Degree in Information Systems",
    university: "Universitas Raharja",
    stillStudying:
      "2023 – 2027 • Concentration in Information Systems Management. Focused on IT governance, business process management, information systems strategy, and digital transformation. Developed knowledge in software development, database systems, project management, and enterprise information systems.",
    highSchool: "Multimedia Vocational High School",
    school: "SMKN 5 Kota Tangerang",
    highSchoolDesc:
      "2018 – 2020 • Studied multimedia production, graphic design, web development fundamentals, and digital content creation. Built foundational skills in UI design, web technologies, and creative digital media. Developed knowledge in software development, database systems, project management, and enterprise information systems.",
    seniorFrontendDev: "Fullstack Developer",
    fullstackDev: "Fullstack Developer",
    internship: "Web Developer Intern",
    present: "Present",
    roleDesc1:
      "Architected and developed high-performance backend microservices using FastAPI and Falcon, serving scalable RESTful APIs for real-time educational analytics.",
    roleDesc2:
      "Designed and optimized relational database schemas and data modeling using PonyORM, improving query execution speeds, indexing, and overall data integrity.",
    roleDesc3:
      "Integrated modern React/Next.js dynamic frontend interfaces seamlessly with Python microservices, improving end-to-end user experience.",
    descGaruda:
      "Developed geospatial web applications utilizing mapping technologies (Google Maps API, OpenStreetMap, Leaflet.js) to support location-based business operations.\n\nImplemented interactive mapping solutions using Google Maps API, OpenStreetMap, and Leaflet.\n\nCollaborated within a cross-functional development team using Git-based workflows and modern development practices.\n\nContributed to frontend, backend, and system integration tasks across multiple projects.",
    descTrinindya:
      "Assisted in developing and maintaining full-stack web applications using PHP frameworks.\n\nBuilt and customized business application modules using Laravel, CodeIgniter, and CodeIgniter HMVC.\n\nPerformed data entry, data validation, and database management tasks to ensure data accuracy and consistency.\n\nParticipated in debugging, feature implementation, and database integration activities.\n\nCollaborated with senior developers to test, deploy, and maintain web application features.",
    downloadCV: "Download Resume",
    aboutMeContent:
      "Fullstack Developer with over 5 years of experience building scalable and high-performance web applications. Specialized in the React/Next.js ecosystem and the integration of Generative AI technologies (LLMs) to create intelligent, user-centric digital solutions.\n\nExperienced in managing the entire software development lifecycle, from UI/UX design and frontend architecture to cloud infrastructure and server management. Proven ability to deliver modern, efficient, and maintainable applications.",
  },
  id: {
    about: "Tentang Saya",
    experience: "Pengalaman Profesional",
    education: "Pendidikan",
    skills: "Keahlian Teknis",
    certifications: "Sertifikasi & Prestasi",
    currentRole: "Peran Saat Ini",
    bachelor: "Sarjana Sistem Informasi",
    university: "Universitas Raharja",
    stillStudying:
      "2023 – 2027 • Konsentrasi dalam Manajemen Sistem Informasi. Fokus pada tata kelola TI, manajemen proses bisnis, strategi sistem informasi, dan transformasi digital. Mengembangkan pengetahuan dalam pengembangan perangkat lunak, sistem database, manajemen proyek, dan sistem informasi perusahaan.",
    highSchool: "SMK Multimedia",
    school: "SMKN 5 Kota Tangerang",
    highSchoolDesc:
      "2018 – 2020 • Mempelajari produksi multimedia, desain grafis, dasar-dasar pengembangan web, dan pembuatan konten digital. Membangun keterampilan dasar dalam desain UI, teknologi web, dan media digital kreatif. Mengembangkan pengetahuan dalam pengembangan perangkat lunak, sistem database, manajemen proyek, dan sistem informasi perusahaan.",
    seniorFrontendDev: "Fullstack Developer",
    fullstackDev: "Fullstack Developer",
    internship: "Web Developer Intern",
    present: "Sekarang",
    roleDesc1:
      "Membangun dan mengembangkan arsitektur microservices performa tinggi dengan FastAPI dan Falcon, menyediakan API RESTful yang skalabel untuk analisis pendidikan real-time.",
    roleDesc2:
      "Merancang dan mengoptimalkan skema database relasional dan pemodelan data menggunakan PonyORM, meningkatkan kecepatan eksekusi kueri, pengindeksan, dan integritas data secara keseluruhan.",
    roleDesc3:
      "Mengintegrasikan antarmuka frontend dinamis React/Next.js modern secara mulus dengan microservices Python, meningkatkan pengalaman pengguna ujung ke ujung.",
    descGaruda:
      "Mengembangkan aplikasi web geospasial menggunakan teknologi pemetaan (Google Maps API, OpenStreetMap, Leaflet.js) untuk mendukung operasi bisnis berbasis lokasi.\n\nMengimplementasikan solusi pemetaan interaktif menggunakan Google Maps API, OpenStreetMap, dan Leaflet.\n\nBerkolaborasi dalam tim pengembangan lintas fungsi menggunakan alur kerja berbasis Git dan praktik pengembangan modern.\n\nBerkontribusi pada tugas frontend, backend, dan integrasi sistem di beberapa proyek.",
    descTrinindya:
      "Membantu dalam pengembangan dan pemeliharaan aplikasi web full-stack menggunakan framework PHP.\n\nMembangun dan menyesuaikan modul aplikasi bisnis menggunakan Laravel, CodeIgniter, dan CodeIgniter HMVC.\n\nMelakukan entri data, validasi data, dan tugas manajemen database untuk memastikan keakuratan dan konsistensi data.\n\nBerpartisipasi dalam aktivitas debugging, implementasi fitur, dan integrasi database.\n\nBerkolaborasi dengan pengembang senior untuk menguji, menerapkan, dan memelihara fitur aplikasi web.",
    downloadCV: "Unduh Resume",
    aboutMeContent:
      "Fullstack Developer dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web yang skalabel dan berkinerja tinggi. Spesialisasi dalam ekosistem React/Next.js dan integrasi teknologi Generative AI (LLMs) untuk menciptakan solusi digital cerdas yang berpusat pada pengguna.\n\nBerpengalaman dalam mengelola seluruh siklus hidup pengembangan perangkat lunak, mulai dari desain UI/UX dan arsitektur frontend hingga infrastruktur cloud dan manajemen server. Memiliki kemampuan terbukti untuk menghadirkan aplikasi modern, efisien, dan mudah dipelihara.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
