import Layout from './components/Layout';
import HeroSection from './components/HeroSection';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <HeroSection />
      </Layout>
    </LanguageProvider>
  );
}

export default App;