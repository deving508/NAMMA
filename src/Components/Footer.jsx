import Video1 from "../assets/679cb9cacf00799ba4b4c985_68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4"
import Video2 from "../assets/679cb9cacf00799ba4b4c985_68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4"
import Video3 from "../assets/679cb9cacf00799ba4b4c985_68dfa2440a49684a10b9e055_FOOTER - BRANDINGV2-transcode.mp4"
import Video4 from "../assets/679cb9cacf00799ba4b4c985_68dfa20fc54b7796aaa5edf6_SILVR-Video 1 footersV3-transcode.mp4"
import Video5 from "../assets/679cb9cacf00799ba4b4c985_68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-transcode.mp4"
import Video6 from "../assets/679cb9cacf00799ba4b4c985_68dfa1926bb2adbd4315d488_Zefir footerV2-transcode.mp4"
import Image from "../assets/Screenshot (102).svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useEffect(() => {
    gsap.fromTo(".short-p1-footer", {
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
      trigger: ".short-p1-footer",
      start: "top 80%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p2-footer", {
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
      trigger: ".short-p2-footer",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p3", {
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
      trigger: ".short-p3",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p4", {
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
      trigger: ".short-p4",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p5", {
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
      trigger: ".short-p5",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p6", {
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
      trigger: ".short-p6",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p7", {
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
      trigger: ".short-p7",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".short-p8", {
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
      trigger: ".short-p8",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".one, .two, .three, .four, .five, .six, .seven", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".socials",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

useEffect(() => {
    gsap.fromTo(".onee, .twoo, .threee, .fourr, .fivee, sixx", {
    y: 30,
    opacity: 0,
    },
    {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".socials2",
      start: "top 90%", 
      toggleActions: "play none none none",
    }
    }
  );
}, []);

    return(
        <div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center text-start justify-start items-start gap-x-6">
                <p className="short-p1-footer pt-30 font-extrabold text-5xl tracking-tighter scale-x-85 scale-y-110 -mx-12 md:pt-50 md:text-7xl lg:text-9xl lg:-mx-20">LET'S WORK <br className="xss:hidden md:flex" /> TOGETHER</p>
                <div className="lg:pr-20">
                <p className="short-p2-footer pt-10 lg:pt-26 font-semibold text-[1.2rem] -mx-3">Work with us if average isn't your thing. <br /> Drop it, we'll build it.</p>
                <p className="short-p3 mt-8 text-[0.9rem] tracking-widest text-gray-800 -mx-3">SAY HELLO {">"}</p>
                </div>
            </div>
            <div className="pt-15 flex gap-4 -mx-3 lg:pt-45">
                <video src={Video1}
                autoPlay
                loop
                muted
                className="rounded-md w-25 md:w-33 lg:w-50">
                </video>
                <video src={Video2}
                autoPlay
                loop
                muted
                className="rounded-md w-25 md:w-33 lg:w-50">
                </video>
                <video src={Video3}
                autoPlay
                loop
                muted
                className="rounded-md w-25 md:w-33 lg:w-50">
                </video>
                <video src={Video4}
                autoPlay
                loop
                muted
                className="rounded-lg w-25 xss:hidden md:flex md:w-33 lg:w-50">
                </video>
                <video src={Video5}
                autoPlay
                loop
                muted
                className="rounded-lg w-25 xss:hidden md:flex md:w-33 lg:w-50">
                </video>
                <video src={Video6}
                autoPlay
                loop
                muted
                className="rounded-lg w-25 xss:hidden lg:flex lg:w-50">
                </video>
            </div>
            <div className="md:flex md:justify-between">
            <div className="pt-10 flex md:flex-col justify-between -mx-2">
                <div className="socials text-[0.8rem] font-medium tracking-widest text-gray-900 flex flex-col leading-5.5 md:pt-5">
                    <p className="one">HOME</p>
                    <p className="two">WORK</p>
                    <p className="three">SERVICES</p>
                    <p className="four">STUDIO</p>
                    <p className="five">PLANS</p>
                    <p className="six">APPROACH</p>
                    <p className="seven">NEWS</p>
                </div> 
                <div className="socials2 text-[0.8rem] font-medium tracking-widest text-gray-900 flex flex-col leading-5.5 pr-10 md:pt-10">
                    <p className="onee">YOUTUBE</p>
                    <p className="twoo">LINKEDIN</p>
                    <p className="threee">INSTAGRAM</p>
                    <p className="fourr">LEGAL</p>
                    <p className="fivee">PLANS</p>
                    <p className="sixx">SITE EN FRANCAIS</p>
                </div> 
            </div>
            <div className="pt-10 text-[0.8rem] font-medium tracking-widest text-gray-900 -mx-2 md:pr-20 lg:pr-50">
                <p className="short-p4 pt-5">WE ARE A CREATIVE STUDIO <br className="xss:hidden md:flex lg:hidden" /> BASED IN PARIS. <br className="xss:hidden md:flex" /> BARCELONA & LONDON</p>
                <p className="short-p5 pt-8">BIG PROJECT? CRAZY <br className="xss:hidden md:flex lg:hidden" /> THOUGHT? OR JUST FEEL <br className="xss:hidden md:flex" /> LIKE CHATTING?</p>
                <p className="short-p6 pt-8">LET'S TALK!</p>
                <p className="short-p7 pt-8">HELLO@STUDIONANA.COM</p>
                <p className="short-p8 pt-8">COPYRIGHT 2025 <br /> STUDIO NAMMA</p>
            </div>
            </div>
            <div className="flex text-center justify-center items-center pt-8">
                <p className="font-extrabold text-8xl tracking-tighter scale-x-85 scale-y-110 -mx-12 md:text-[13rem] lg:text-[23.7rem] text-black/90">NAMMA</p>
            </div>
        </div>
    )
}

export default Footer