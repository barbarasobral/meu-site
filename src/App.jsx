import Navbar from "./components/Navbar"
import { useTheme } from './hooks/useTheme';

import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-300 scroll-smooth ${theme === "dark" ? "dark" : ""}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className='grow pt-24'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App;
