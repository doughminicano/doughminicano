/* eslint-disable react/prop-types */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";

const PopUpProj = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // My projects
  const projects = [
    {
      id: 1,
      title: "Ticketing System",
      tools: "[Vite/React, tailwindcss, framer-motion]",
      description: "A ticketing system using state and a single component.",
      img: "/ticketSystem.png",
      link: "https://ticketing.doughminicano.com/",
      code: "https://github.com/doughminicano/ticket_system_offline",
    },
    {
      id: 2,
      title: "Data Manager",
      tools:
        "[React Chart.js, tailwindcss, framer-motion, google-scipts-api, google-sheets-api]",
      description:
        "A dashboard using recipes from my fuel transactions for the past 3 years. Real-time updates",
      img: "shellsPreview.png",
      link: "https://shells.doughminicano.com/",
      code: "https://github.com/doughminicano/shells.git",
    },
    {
      id: 3,
      title: "Picture Time",
      tools: "React,CSS,Axios",
      description:
        "A very simple api app, made from Unsplash API. Made for api practice",
      img: "picTimePreview.png",
      link: "https://picturetime.doughminicano.com/",
      code: "https://github.com/doughminicano/Picture-TIme",
    },
  ];

  return (
    <>
      <div className="flex flex-col p-4 gap-6 max-sm:flex-1 overflow-auto no-scrollbar mt-5">
        <div className="flex p-4 gap-6 max-sm:flex-1 overflow-auto no-scrollbar mt-10">
          {projects.map((project) => (
            <motion.div
              className="border border-white shadow-lg shadow-red-500/50 relative flex-shrink-0 w-full lg:w-96 md:w-64 lg:h-96 md:h-80 bg-slate-900 bg-opacity-75 text-white rounded-2xl overflow-hidden"
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setIsOpen(true);
              }}
            >
              <h3 className="text-lg text-center p-2 font-bold bg-black border-4 border-b-red-500">
                {project.title}
              </h3>
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <SpringModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          project={selectedProject}
        />
      </div>
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen, project }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/50 backdrop-blur-md fixed inset-0 z-50 grid place-items-center overflow-x-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0.9, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl sm:max-w-sm md:max-w-lg lg:max-w-2xl bg-white text-black p-6 rounded-lg shadow-xl relative cursor-default overflow-hidden scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-800"
          >
            {project.img ? (
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            ) : (
              <div className="flex items-center justify-center bg-black h-48 rounded-t-lg">
                {project.img}
              </div>
            )}
            <div className="p-4 bg-black/5 rounded-b-lg">
              <h3 className="text-2xl font-extrabold text-center mb-2">
                {project.title}
              </h3>
              <p className="text-center text-blue-700 font-bold opacity-50">
                {project.tools}
              </p>
              <p className="text-center font-semibold text-gray-700 mb-6">
                {project.description}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-sky-400 text-white font-semibold w-24 py-2 rounded"
                >
                  <TiArrowBack className="relative start-8 size-8" />
                  Go Back
                </button>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noRef"
                  className="bg-black transition text-white font-semibold w-24 py-2 rounded text-center"
                >
                  <FaGithub className="relative  start-8 size-8" />
                  Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noRef"
                  className="bg-sky-400 text-white font-semibold w-24 py-2 rounded text-center"
                >
                  <MdPreview className="relative start-8 size-8" />
                  Preview
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUpProj;
