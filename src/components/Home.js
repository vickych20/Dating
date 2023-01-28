import React from 'react';
import Homee from './pages/Homee';
import Home_flex from './pages/Home_flex';
import Homea from './pages/Homea';
import HomeB from './pages/HomeB';
import Homec from './pages/Homec';
import Last from './pages/Last';
import HomeProf from './pages/HomeProf';
import Create from './pages/Create';
import Download from './pages/Download';
import Our from './pages/Our';
import Card from './pages/Card';
import Testimonials from './pages/Testimonials';
import True from './pages/True';
import Sslider from './pages/Sslider';
import Cimtacft from "./pages/Cimtacft";
import Footer from './pages/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



const Home = () => {
    return (
      <div className="overflow-x-hidden">
        <Homee/>
        <Home_flex />
        <Homea />
        <HomeB />
        <Homec />
        <Last />
        <HomeProf />
        <Last />
        <Create />
        <Download />
        <Our />
        <Card />
        <Testimonials />
        <True />
        <Sslider />
       
        <Cimtacft />
        
    
        <Footer/>

      </div>
    );
}

export default Home
