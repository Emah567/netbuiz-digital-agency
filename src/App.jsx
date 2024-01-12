import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Sidebar'
import Footer from './components/Footer';
import Loader from './components/loader';
import Privacy from './components/terms.jsx'

const App = () => {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = elem.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);
  return (
    <Router>
      <div>
      <Loader />
      
        <Navigation /> 
       < Privacy/>
      

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
