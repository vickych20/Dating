
import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
 
  import Home from './components/Home'
  import Profiles from "./components/Profiles";
  import Stories from "./components/Stories";
  import Pages from "./components/Pages";
  import Blog from "./components/Blog";
import First from './components/First/First';
import "./App.css"
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <>
    <Router>
      <div className="max-md:hidden">
          <First />
          <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
            
          </Routes>
          
        </div>
        
      <Navbar />

        
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
      
    
        
    
    </>
  );
}

export default App
