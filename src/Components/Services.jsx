import Image1 from "../assets/qonto-2022.svg"
import Image2 from "../assets/Logo_Matera_2025.png"
import Image3 from "../assets/680b93f0ed9b81489be813ab_chance.svg"
import Image4 from "../assets/KROKU01.svg"
import Image5 from "../assets/logo_5 (1).svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useEffect(() => {
    gsap.fromTo(".short-p-services", {
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
      trigger: ".short-p-services",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p2", {
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
      trigger: ".short-p2",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".long-p-services", {
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
      trigger: ".long-p-services",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".images1, .images2, .images3, .images4, .images5", {
    opacity: 0,
    },
    {
    opacity: 1,
    duration: 2,
    ease: "power3.out",
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".images",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    return(
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <p className="short-p-services px-2 text-[1rem] tracking-widest pt-30 text-gray-800 pb-6 md:pt-40">SERVICES</p>
                <p className="long-p-services pt-6 font-extrabold text-[2.5rem] tracking-tighter scale-x-85 scale-y-110 -mx-10 leading-none md:text-7xl md:pt-15 lg:text-8xl lg:leading-20">
                    ART DIRECTION <br />
                    BRANDING <br />
                    WEBFLOW <br />
                    UI/UX DESIGN <br />
                    GSAP ANIMATIONS <br />
                    3D & MOTION <br />
                    ADVERTISING <br />
                    SEO & CONTENT <br />
                </p>
                <p className="short-p2 pt-14 md:pt-25 lg:pt-35 px-2 text-[1rem] tracking-widest text-gray-800">
                    SEE ALL {">"}
                </p>
                <div className="images pt-30 flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-22 lg:-mx-12 md:pt-40">
                <img className="images1 w-22 lg:w-40" src={Image1} alt="" />
                <img className="images2 w-30 lg:w-53" src={Image2} alt="" />
                <img className="images3 w-35 lg:w-55" src={Image3} alt="" />
                <img className="images4 w-22 lg:w-40" src={Image4} alt="" />
                <img className="images5 w-30 lg:w-50" src={Image5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Services