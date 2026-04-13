/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import Certificate from "./Certificate";
import PopUpProj from "./PopUpProj";
import { SiCredly } from "react-icons/si";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  //   FaTwitter,
} from "react-icons/fa";

const Section = (props) => {
  const { children, className = "", ...rest } = props;

  return (
    <motion.section
      {...rest}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
      className={`h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-start justify-center p-8 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:px-20 md:px-10 sm:px-5 sm:py-10">
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <CertificatesSection />
      <Contact />
    </div>
  );
};

// All Sections Below

// About Section
const AboutSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Section className="max-sm:flex" id="about">
      <motion.h1
        className="text-4xl font-extrabold leading-snug italic"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          cursor: "pointer",
        }}
      >
        {hovered ? "Hola, me llamo" : "Hi, I'm"}
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.5,
          ease: "easeInOut",
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.15 },
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          cursor: "pointer",
        }}
        className="text-5xl font-extrabold px-1 text-red-500  italic mt-2 animate-bounce"
      >
        {hovered ? "Doughminicano" : "Daniel Garcia"}
      </motion.h1>
      <motion.p
        className="text-lg font-extrabold text-blue-700 mt-3 italic whitespace-break-spaces"
        initial={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          cursor: "pointer",
        }}
      >
        {hovered
          ? "Bienvenido, soy un profesional de TI que crea experiencias web modernas y sigue creciendo en ciberseguridad."
          : "I build modern web experiences and bring an IT-first mindset to every project."}
      </motion.p>
      <br />
      <div className="text-lg font-extrabold mt-3 mb-2 italic whitespace-break-spaces flex-initial max-sm:bg-black/5 max-sm:text-white p-2 rounded-md">
        <p>
          I&apos;m an IT professional, frontend developer, and cybersecurity student focused on
          <br /> building clean, reliable experiences for real people. I work primarily with
          <br /> React, JavaScript, and Python, and I enjoy projects that blend
          <br /> usability, problem-solving, and strong technical execution.
          <br /> If you need a polished website, a custom internal tool, or a thoughtful
          <br /> collaborator on your next idea, I&apos;d love to connect.
        </p>
      </div>

      {/* Social Contacts */}
      <div className="flex justify-between gap-4 md:gap-6 lg:gap-8 mt-5 space-x-6">
        {/* GitHub Link */}
        <div className="flex-1 hover:scale-150">
          <a
            href="https://github.com/doughminicano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Daniel Garcia's GitHub profile"
            className="text-black hover:text-gray-700 text-3xl transition-transform duration-300 transform hover:scale-125"
          >
            <FaGithub className="text-white" />
          </a>
        </div>

        {/* Facebook Link */}
        <div className="flex-1 hover:scale-150">
          <a
            href="https://www.facebook.com/doughminicano/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Daniel Garcia's Facebook profile"
            className="text-blue-600 size-20 hover:text-blue-800 text-3xl transition-transform duration-300 transform hover:scale-150"
          >
            <FaFacebook />
          </a>
        </div>

        {/* LinkedIn Link */}
        <div className="flex-1 hover:scale-150">
          <a
            href="https://www.linkedin.com/in/daniel-garcia-14b217210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Daniel Garcia's LinkedIn profile"
            className="text-blue-500 hover:text-blue-700 text-3xl transition-transform duration-300 transform "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "Javascript",
    level: 90,
  },
  {
    title: "React",
    level: 80,
  },
  {
    title: "IT Knowledge",
    level: 70,
  },
  {
    title: "Front-end",
    level: 65,
  },
  {
    title: "Back-end",
    level: 50,
  },
  {
    title: "Python",
    level: 45,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 30,
  },
];

const languages = [
  {
    title: "🇺🇸 English",
    level: 100,
  },
  {
    title: "🇩🇴 Spanish",
    level: 90,
  },
];

// Skills Section
const SkillSection = () => {
  return (
    <Section>
      <div>
        <motion.h1 className="text-5xl font-bold">Skills</motion.h1>
        <p className="mt-4 max-w-xl text-base font-semibold text-slate-300">
          My strongest work sits at the intersection of IT support, frontend
          engineering, and practical problem-solving.
        </p>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={skill.title}>
              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 2, delay: 1 + index * 0.2 }}
                className="text-xl font-bold text-gray-800"
              >
                {skill.title}
              </motion.h3>
              <div className="mt-2.5 h-2 w-full rounded-full bg-gray-400/50">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  className="h-full bg-blue-700 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 2.5, delay: 1.5 }}
      >
        <h1 className="text-5xl font-bold mt-10">Languages</h1>
        <div className="mt-8 space-y-4">
          {languages.map((lng, index) => (
            <div className="w-64" key={lng.title}>
              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 2.5, delay: 1 + index * 0.2 }}
                className="text-xl font-bold text-gray-800"
              >
                {lng.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-400/50 rounded-full mt-2">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{ duration: 2, delay: 1 + index * 0.2 }}
                  className="h-full bg-blue-700 rounded-full"
                  style={{ width: `${lng.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

// Projects Section
const ProjectsSection = () => {
  return (
    <Section className="flex-auto ">
      <div className="flex-0 items-center space-x-6">
        <h1 className="mt-5 text-5xl font-bold">Projects</h1>
        <a
          href="https://github.com/doughminicano"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Daniel Garcia's GitHub projects"
          className="text-white transition duration-300 hover:text-red-500 hover:animate-spin"
        >
          <FaGithub className="size-12" />
        </a>
      </div>

      <motion.span
        initial={{ x: 0 }}
        whileInView={{ x: 150, y: 50 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 text-justify text-xl text-slate-500 lg:hidden md:hidden"
      >
        Scroll & Click
      </motion.span>
      <p className="mt-5 max-w-2xl text-base font-semibold text-slate-300">
        These projects highlight the kind of work I enjoy most: business-facing
        websites, internal tools, and data-driven interfaces that solve real problems.
      </p>
      <PopUpProj />
    </Section>
  );
};

// Certificates Section
const CertificatesSection = () => {
  return (
    <Section className="flex-auto">
      <div className="flex justify-between gap-10">
        <h1 className="mt-10 text-5xl font-bold md:block grid grid-columns-1 sm:grid-columns-1 md:grid-columns-2 lg:grid-columns-3 gap-4">
          Certificates
        </h1>
        <a
          href="https://www.credly.com/users/daniel-garcia.8dcb663e"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Daniel Garcia's Credly badges"
          className="mt-10 text-blue-700 animate-pulse rounded-full border-4 border-blue-700 p-1 transition hover:animate-spin hover:text-red-700"
        >
          <SiCredly className="size-16" />
        </a>
      </div>
      <Certificate />
    </Section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <Section>
      <div className="max-w-2xl rounded-3xl border-2 border-white/30 bg-slate-900/60 p-8 shadow-lg shadow-blue-950/40">
        <h1 className="text-5xl font-bold text-white">Contact</h1>
        <p className="mt-4 text-base font-semibold text-slate-300">
          Have a project in mind, need help improving a workflow, or want to
          talk through an idea? The best way to reach me is by email.
        </p>
        <a
          href="mailto:daniel@tekflu.com"
          className="mt-8 inline-block rounded-2xl border border-red-400 bg-black/30 px-6 py-4 text-2xl font-extrabold text-white transition hover:border-blue-400 hover:text-blue-200"
        >
          daniel.garcia@tekflu.com
        </a>
        <p className="mt-4 max-w-xl text-sm font-semibold text-slate-400">
          Email me for freelance work, collaborations, or general inquiries.
        </p>
      </div>
    </Section>
  );
};
