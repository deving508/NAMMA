import Image1 from "../assets/Screenshot (97).png"
import Image2 from "../assets/Screenshot (100).png"
import Image3 from "../assets/Screenshot (98).png"
import Image4 from "../assets/Screenshot (99).png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    useEffect(() => {
    gsap.fromTo(".short-p-projects", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".short-p-projects",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);
 
useEffect(() => {
    gsap.fromTo(".long-p-projects", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".long-p-projects",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);
 
useEffect(() => {
    gsap.fromTo(".image1", {
    x: -170,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".image1",
      start: "top 100%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".image2", {
    x: 170,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".image2",
      start: "top 100%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".image3", {
    x: -170,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".image3",
      start: "top 100%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".image4", {
    x: 170,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".image4",
      start: "top 100%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    return(
        <div className="pt-40">
            <div className="flex flex-col justify-center text-center items-center md:pt-20">
                <p className="short-p-projects px-2 text-[1rem] tracking-widest text-gray-800">SELECTED PROJECTS</p>
                <p className="long-p-projects pt-6 font-extrabold text-6xl tracking-tighter scale-x-80 scale-y-110 md:pt-20 md:text-9xl lg:text-[11rem]">PLAYGROUND</p>
                <div className="-mx-2 flex flex-col gap-4 md:pt-35 md:grid md:grid-cols-2 md:grid-rows-2 overflow-x-hidden">
                <img src={Image1} className="image1 pt-20 md:-mt-20 lg:w-160" alt="" />
                <img src={Image2} className="image2 lg:w-160" alt="" />
                <img src={Image3} className="image3 lg:w-160" alt="" />
                <img src={Image4} className="image4 lg:w-160" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects