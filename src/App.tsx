import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </LanguageProvider>
  );
}

export default App;