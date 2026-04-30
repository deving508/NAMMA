import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
    gsap.fromTo(".short-p, .long-p", {
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
      trigger: ".about-section",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    return(
        <div>
            <div className="flex flex-col text-center justify-center items-center md:pt-30">
                <p className="about-section short-p px-2 text-[0.9rem] tracking-widest text-gray-800">CREATIVE STUDIO BUILDING <br className="md:hidden" /> PREMIUM BRANDS</p>
                <p className="long-p pt-10 font-extrabold text-[2.4rem] tracking-tighter scale-x-85 scale-y-110 -mx-14 md:-mx-20 lg:-mx-25 leading-none px-6 md:text-6xl lg:text-[5.4rem]">
                    IT'S NEVER <br className="md:hidden" /> "JUST A WEBSITE" <br className="xss:hidden lg:flex" /> EVERY <span className="lg:underline">DETAIL</span> MATTERS. <br className="xss:hidden md:flex" /> WE CRAFT DIGITAL EXPERIENCES. <br /> YOUR DESIGN. <br className="md:hidden" /> OUR <br className="xss:hidden md:flex lg:hidden" /> OBSESSION. <br /> YOUR BRAND. <br className="md:hidden" /> OUR <br className="xss:hidden md:flex lg:hidden" /> <span className="lg:underline">PLAYGROUND.</span>
                </p>
            </div>
        </div>
    )
}

export default About