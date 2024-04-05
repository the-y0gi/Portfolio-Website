
import './App.css';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Experience from './components/ExperienceSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProfileSection from './components/ProfileSection';
import Projects from './components/ProjectSection';

function App() {
  return (
    <div className="App">
      
       <NavBar/>
       <ProfileSection/>
       <AboutSection/>
       <Experience/>
       <Projects/>
       <Contact/>
       <Footer/>
       
      
    </div>
  );
}

export default App;
