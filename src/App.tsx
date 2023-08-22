
import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import NoPage from './components/pages/nopage';
import About from './components/pages/about';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/nopage' element={<NoPage />} />
    </Routes>
    </>
  );
}

export default App;
