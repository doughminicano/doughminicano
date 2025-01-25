/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./ContactForm";
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
  const { children } = props;

  return (
    <motion.section
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
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
    `}
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
        animate={{ opacity: 1, translateY: 0, ease: "easeOut" }}
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
        initial={{ opacity: 0, scale: 100 }}
        animate={{ opacity: 1, scale: 0 }}
        transition={{
          delay: 2,
          duration: 0.3,
          ease: "easeInOut",
          scale: { type: "spring", visualDuration: 0.8, bounce: 0.25 },
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          cursor: "pointer",
        }}
        className="text-6xl font-extrabold px-1  italic mt-2 animate-bounce"
      >
        <div>{hovered ? "Doughminicano" : "Daniel Garcia"}</div>
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
          textDecorationLine: "blink",
        }}
      >
        {hovered
          ? "Bienvenido ," +
            " Soy desarrollador de software y estudiante de ciberseguridad."
          : "Welcome,I'm a Software Developer and Cybersecurity Student."}
      </motion.p>
      <br />
      <div className="text-lg font-extrabold mt-3 italic whitespace-break-spaces flex-initial max-sm:bg-black/5 max-sm:text-white p-2 rounded-md">
        <p>
          I have been coding for the past 2 years and currently <br /> a
          Cybersecurity student. I mainly work with React <br /> but I have been
          using Python too lately. I'm always <br /> looking to connect. Whether
          you have a question or <br /> a new project to work on, feel free to
          reach out to me.
        </p>
      </div>

      {/* Social Contacts */}
      <div className="flex justify-between gap-4 md:gap-6 lg:gap-8 mt-5">
        {/* GitHub Link */}
        <div className="flex-1">
          <a
            href="https://github.com/doughminicano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 text-3xl transition-transform duration-300 transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>

        {/* Facebook Link */}
        <div className="flex-1">
          <a
            href="https://www.facebook.com/doughminicano/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 size-20 hover:text-blue-800 text-3xl transition-transform duration-300 transform hover:scale-150"
          >
            <FaFacebook />
          </a>
        </div>

        {/* LinkedIn Link */}
        <div className="flex-1 hover:scale-125">
          <a
            href="https://www.linkedin.com/in/daniel-garcia-14b217210/"
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
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
              <div className="h-2 w-full bg-gray-400/50 rectangle-full mt-2.5">
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
            <div className="w-64" key={index}>
              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 2.5, delay: 1 + index * 0.2 }}
                className="text-xl font-bold tex-gray-800"
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
    <Section className="flex-auto">
      <div className="flex justify-between gap-10">
        <h1 className="mt-10 text-5xl font-bold md:block grid grid-columns-1 sm:grid-columns-1 md:grid-columns-2 lg:grid-columns-3 gap-4">
          Projects
          <FaGithub
            onClick={() => {
              window.open("https://github.com/doughminicano");
            }}
            className="text-black hover:text-gray-700 size-10 transition-transform duration-300 transform hover:scale-125"
          />
        </h1>
      </div>
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
        <SiCredly
          className="mt-10 text-blue-700 cursor-pointer animate-pulse size-16 border-4 p-1 border-blue-700 rounded-full hover:animate-spin hover:text-red-700"
          onClick={() => {
            window.open("https://www.credly.com/users/daniel-garcia.8dcb663e");
          }}
        />
      </div>
      <Certificate />
    </Section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <Section>
      <ContactForm />
    </Section>
  );
};
