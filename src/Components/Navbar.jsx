import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useEffect(() => {
    gsap.fromTo(".btn1, .btn2, .btn3, .btn4", {
    y: 10,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".navbar-section",
      start: "top 80%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    const [click, setClicked] = useState(false)

    function TrackClick () {
        setClicked(!click)
    }

    useEffect(() => {
    gsap.fromTo(".menu-btn1, .menu-btn2, .menu-btn3, .menu-btn4, .menu-btn5, .menu-btn6, .menu-btn7", {
    x: 200,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    stagger: 0.1,
    ease: "power3.out",
    stagger: 0.3,
    }
  );
}, [click]);

    useEffect(() => {
    gsap.fromTo(".menu-container", {
    x: 200,
    opacity: 0,
    },
    {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    }
  );
}, [click]);

useEffect(() => {
  if (click) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [click]);

    return(
        <>
        <div className="navbar-section sticky top-0 flex justify-between text-[0.8rem] font-bold tracking-widest px-4 py-4 z-40">
            <a href="" className="btn1 whitespace-nowrap">STUDIO NANNA</a>
            <a href="" className="xss:hidden md:flex btn2">DARK MODE</a>
            <a onClick={TrackClick} className="btn3 cursor-pointer">{click ? "CLOSE" : "MENU"}</a>
            <a href="" className="xss:hidden md:flex btn4">LET'S TALK</a>
        </div>
        { click && (
                <div className="menu-container font-extrabold text-6xl md:text-7xl tracking-tighter scale-x-85 scale-y-110 z-10 -mx-4 text-start h-screen w-full flex flex-col justify-center">
                    <div className="mb-20 pr-40 lg:flex lg:text-9xl lg:gap-x-20 lg:items-end">
                    <div>
                    <p className="menu-btn1">HOME <br /></p>
                    <p className="menu-btn2">WORK <br /></p>
                    <p className="menu-btn3">SERVICES <br /></p>
                    <p className="menu-btn4">APPROACH <br className="lg:hidden" /></p>
                    </div>
                    <div>
                    <p className="menu-btn5">STUDIO <br className="lg:hidden"  /></p>
                    <p className="menu-btn6">PLANS <br className="lg:hidden" /></p>
                    <p className="menu-btn7">NEWS </p>
                    </div>
                    </div>
                </div>
            )}
            </>
    )
}

export default Navbar