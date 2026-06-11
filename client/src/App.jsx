import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Education from './components/Education';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { navItems, portfolioData, seo } from './data/portfolioData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = seo.title;

    const descriptionMeta =
      document.querySelector('meta[name="description"]') || document.createElement('meta');

    descriptionMeta.setAttribute('name', 'description');
    descriptionMeta.setAttribute('content', seo.description);

    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(descriptionMeta);
    }
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: '-18% 0px -55% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="loader-mark">RD</div>
            <div className="loader-copy">
              <strong>Rakesh Dhangar</strong>
              <span>MERN Stack Developer Portfolio</span>
            </div>
            <div className="loader-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="app-shell">
        <div className="app-grid" aria-hidden="true" />
        <Navbar items={navItems} activeSection={activeSection} ownerName={portfolioData.owner.name} />

        <motion.main
          className="site-main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <Hero data={portfolioData} />
          <About data={portfolioData} />
          <Skills skillGroups={portfolioData.skillGroups} />
          <Achievements
            metrics={portfolioData.achievementMetrics}
            certifications={portfolioData.certifications}
          />
          <Projects projects={portfolioData.projects} />
          <Education timeline={portfolioData.educationTimeline} />
          <CodingProfiles profiles={portfolioData.codingProfiles} />
          <Contact owner={portfolioData.owner} contactCards={portfolioData.contactCards} />
        </motion.main>

        <Footer owner={portfolioData.owner} />
        <ScrollToTopButton visible={showScrollTop} />
      </div>
    </>
  );
}

export default App;
