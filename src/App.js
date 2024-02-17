import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Details from './components/Details';
import Project from './components/Project';
import Projects from './components/Projects';
import Experience from './components/Experience';


function App() {
  


  return (
    <Router>
      <nav className='navbar'>
        <div className='portfolio'>
          Portfolio
        </div>
        <div className='links'>
          <Link style={{textDecoration: 'none', color: 'darkgreen'}} to='/' target='blank'><div>O MNIE</div></Link>
          <Link style={{textDecoration: 'none', color: 'darkgreen'}} to='/doswiadczenie'><div>DOŚWIADCZENIE</div></Link>
          <Link style={{textDecoration: 'none', color: 'darkgreen'}} to='/projekty'><div>PROJEKTY</div></Link>
          <Link style={{textDecoration: 'none', color: 'darkgreen'}} to='/contact'><div>KONTAKT</div></Link>
        </div>
      </nav>
      <div>
        <Routes>

          <Route path="/" element={<About />} />
          <Route path="/doswiadczenie" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projekty" element={<Projects/>} /> 
          <Route path="/projekt" element={<Project/>} />  
          <Route path="/projekt/:id" element={<Details/>} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
