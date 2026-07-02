import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import profileImg from "/images/profileImg.jpg";


const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-[1500px] mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        
        {/* Text */}
        <div>
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A versatile technology graduate who enjoys solving real-world problems.
          </h2>

          <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
            Hi, I&apos;m <span className="text-white font-semibold">Dawn</span>, 
            a recent Computer Science graduate with an interest in software engineering,
            AI engineering, technology consulting, and project management.
          </p>

          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            I enjoy building practical digital solutions, from responsive web applications
            to AI-powered projects. I like working at the intersection of technology,
            people, and problem-solving.
          </p>

          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            Beyond my technical background, I bring over{" "}
            <span className="text-white font-semibold">
              13 years of customer service experience
            </span>
            , which has strengthened my communication, teamwork, stakeholder management,
            and problem-solving skills.
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm">
              Computer Science Graduate
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm">
              AI & Full-Stack Development
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm">
              Technology Consulting
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm">
              Project Management
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm">
              13+ Years Customer Service
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
        <div className="absolute -inset-3 rounded-3xl bg-cyan-400 blur-2xl opacity-40 animate-pulse"></div>

        <img
          src={profileImg}
          alt="Profile"
          className="relative w-full max-w-sm lg:max-w-md object-cover rounded-3xl border border-cyan-400/30 shadow-[0_0_45px_rgba(34,211,238,0.35)]"
        />
      </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

