import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./header/Hero.jsx";
import Footer from "./footer/Footer.jsx";
import Tesimonial from "./testimonial/Tesimonial.jsx";
import Service from "./service/Service.jsx";
import Why from "./why/Why.jsx";
import Registered from "./register/Registered.jsx";
import { Route , Routes } from 'react-router-dom';
import Primium from './pages/Primium.jsx';
import BasicHiring from './pages/basichiring/BasicHiring.jsx';
import Temporary from './pages/temporary/Temporary.jsx';
import Elderlyhire from './pages/elderly/Elderlyhire.jsx';


function App() {
  return (
   <> 
    <div>
    <Navbar />
    <Routes>
      <Route path='/pages' element={<Primium/>} />
      <Route path='/pages/basichiring' element={<BasicHiring/>} />
      <Route path='/pages/temporary' element={<Temporary/>} />
      <Route path='/pages/elderly' element={<Elderlyhire/>} />
    
    </Routes>
    <Hero/>
      <Tesimonial/>
      <Why/>
      <Service/>
      <Registered/>
      <Footer/>
    </div>
   </>
  )
}

export default App