import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const AIRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [AIRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
     <section id="work" ref={sectionRef} className="app-showcase flex-center section-padding pb-20">
      <div className="w-full h-full">
        <TitleHeader
          title="Featured Project"
          sub="A closer look at my current work"
        />
        <div className="showcaselayout">
          <div ref={AIRef} className="first-project-wrapper">
            <div className="image-wrapper flex items-center justify-center">
              <img src="/images/project1.png" alt="AI Assistive Navigation System App Interface" className="w-[85%] h-auto object-contain"/>
            </div>
            <div className="text-content">
              <h2>
                AI Assitive Navigation System for the Visually Impaired 
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Kotlin, TFLite, ESP32 for device navigation system for the visually impaired.
              </p>
            </div>
          </div>
    {/*}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div> 
          </div> */}
        </div>
      </div>
    </section>
    
  );
};

export default AppShowcase;
