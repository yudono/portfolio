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
    bachelor: "Bachelor of Computer Science (S.Kom)",
    university: "Perguruan Tinggi Raharja Tangerang",
    stillStudying: "Expected graduation: August 2027 • Still Studying / Not Graduated",
    middleSchool: "SMP Dharma Bhakti Kota Tangerang",
    school: "SMKN 5 Kota Tangerang",
    seniorFrontendDev: "Senior Frontend Developer",
    fullstackDev: "Full-stack Developer",
    internship: "Internship",
    present: "Present",
    roleDesc1: "Building responsive web applications",
    roleDesc2: "Implementing modern frontend practices",
    roleDesc3: "Creating interactive user interfaces",
    descGaruda: "Created a geospatial website platform with Google Maps, OpenStreetMap, and Leaflet. Collaborative development using Visual Studio Live Share and GitHub.",
    descTrinindya: "Developed full-stack websites using Laravel and CodeIgniter (including HMVC architecture).",
    downloadCV: "Download CV",
    aboutMeContent:
      "IT Enthusiast and Software Development Professional with a strong self-taught background in website development. I specialize in end-to-end software development processes, from design and prototyping to server deployment. Currently working as a Senior Frontend Developer at Paideia Educational Solutions, where I focus on creating innovative web solutions.\n\nI am committed to staying ahead of technological trends, constantly improving efficiency and effectiveness in application development. In addition to programming, I have experience in cloud server architecture, VPS setup, and application hosting. I also have an interest in UI/UX design and actively engage with the design community to enhance user-centric development practices.",
  },
  id: {
    about: "Tentang Saya",
    experience: "Pengalaman Profesional",
    education: "Pendidikan",
    skills: "Keahlian Teknis",
    certifications: "Sertifikasi & Prestasi",
    currentRole: "Peran Saat Ini",
    bachelor: "Sarjana Komputer (S.Kom)",
    university: "Perguruan Tinggi Raharja Tangerang",
    expectedGraduation: "Perkiraan lulus: Agustus 2027",
    stillStudying: "Perkiraan lulus: Agustus 2027 • Masih berkuliah / Belum lulus",
    highSchool: "Multimedia",
    middleSchool: "SMP Dharma Bhakti Kota Tangerang",
    school: "SMKN 5 Kota Tangerang",
    seniorFrontendDev: "Senior Frontend Developer",
    fullstackDev: "Full-stack Developer",
    internship: "Internship",
    present: "Sekarang",
    roleDesc1: "Membangun aplikasi web yang responsif",
    roleDesc2: "Menerapkan praktik frontend modern",
    roleDesc3: "Membuat antarmuka pengguna yang interaktif",
    descGaruda: "Membangun platform situs web geospasial dengan Google Maps, OpenStreetMap, dan Leaflet. Pengembangan kolaboratif menggunakan Visual Studio Live Share dan GitHub.",
    descTrinindya: "Mengembangkan situs web full-stack menggunakan framework Laravel dan CodeIgniter (termasuk arsitektur HMVC).",
    downloadCV: "Unduh CV",
    aboutMeContent:
      "Antusias TI dan Profesional Pengembangan Perangkat Lunak dengan latar belakang otodidak yang kuat dalam pengembangan situs web. Saya berspesialisasi dalam proses pengembangan perangkat lunak end-to-end, mulai dari desain dan pembuatan prototipe hingga penerapan server. Saat ini bekerja sebagai Pengembang Frontend di Paideia Educational Solutions, di mana saya fokus pada pembuatan solusi web yang inovatif.\n\nSaya berkomitmen untuk tetap mengikuti tren teknologi, terus meningkatkan efisiensi dan efektivitas dalam pengembangan aplikasi. Selain pemrograman, saya memiliki pengalaman dalam arsitektur server cloud, pengaturan VPS, dan hosting aplikasi. Saya juga memiliki minat dalam desain UI/UX dan aktif terlibat dengan komunitas desain untuk meningkatkan praktik pengembangan yang berpusat pada pengguna.",
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
