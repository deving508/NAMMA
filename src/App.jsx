import About from "./Components/About"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import { useEffect, useState } from "react";

const App = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  return(
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <About/>
        <Projects/>
        <Services/>
        <Footer/>
        <div className="sticky bottom-0 flex justify-between text-[0.9rem] tracking-widest py-4 z-20 md:-mx-8 lg:-mx-14 px-8 xss:hidden md:flex">
                <p  className="xss:hidden lg:flex">WE CRAFT BOLD DESIGN & CLEAN WEBFLOW.</p>
                <p>BARCELONA , SPAIN {time.toLocaleTimeString()}</p>
        </div>
    </div>
    </>
  )
}

export default App