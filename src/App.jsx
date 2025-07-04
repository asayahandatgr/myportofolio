import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/SkillsSection'
import RecentProjects from './components/Project/RecentProjects';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <AboutMe />
    <Skill />
    <RecentProjects />
    <Footer />
    </>
  )
}

export default App
