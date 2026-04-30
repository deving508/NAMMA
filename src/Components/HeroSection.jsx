import Video from "../assets/project-main-video.mp4"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    useEffect(() => {
    gsap.fromTo(".span1, .span2, .span3", {
    y: 10,
    opacity: 0,
    },
    {
    delay: 0.3,
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top 80%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    return(
        <div className="text-center text-gray-950">
        <div className="hero-container font-extrabold text-7xl tracking-tighter scale-x-85 scale-y-110 z-10 -mx-4 md:text-9xl md:h-screen md:flex md:flex-col md:justify-center md:items-center md:text-center md:pb-60 xss:leading-15 md:leading-28">
            <span className="whitespace-nowrap"> <span className="span1">WE THINK</span></span> <span className="span2">CRAFT AND</span> <br className="xss:hidden" />
            <span className="span3">DESIGN</span>
        </div>
        <div className="pt-20 tracking-wide text-gray-800 md:hidden">
        <p>[ <span className="px-2 text-[0.9rem]">SCROLL</span> ]</p>
        </div>
        <div className="pt-8 md:-mt-40 pb-20 rounded-lg flex justify-center items-center">
            <video src={Video}
             autoPlay
             loop
             muted
             className="rounded-lg">
            </video>
        </div>
        </div>
    )
}

export default HeroSection