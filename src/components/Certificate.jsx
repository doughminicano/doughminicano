"use client";
import { motion } from "framer-motion";

export default function Certificate() {
  return (
    <div className="mb-5 mt-10 md:block sm:mb-5">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-2"> 
        {certificates.map((cert) => (
          <motion.div
            className={`${cert.img === "" ? "hidden" : ""} flex flex-col items-center`}
            key={cert.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="h-auto object-cover lg:w-96 md:w-64 lg:size-72 md:size-48 max-sm:w-52 bg-opacity-75 text-white border-8 border-x-slate-600 border-y-slate-800"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


const certificates = [
  {
    id: 1,
    title: "CompTIA A+",
    date: "Nov-2024",
    expires: "Nov-2027",
    description: "1101/1102 Comptia A+ certification",
    img: "CompA.png",
  },
  {
    id: 2,
    title: "CompTIA Security+",
    date: "Jul-2024",
    expires: "Jul-2027",
    description: "Comptia Sec+ 601 certification",
    img: "CompSec.png",
  },
  {
    id: 3,
    title: "Google IT Certificate",
    date: "Nov-2024",
    expires: "N/A",
    description: "Google/Coursera Certification",
    img: "GoogleITCert.png",
  },
  // {
  //   id: 4,
  //   title: "Google/CompTIA Dual Cert",
  //   date: "Dec-2024",
  //   expires: "N/A",
  //   description: "Dual Qualification from Coursera",
  //   img: "GoogleCompTIA.png",
  // },
  {
    id: 5,
    title: "Full-Stack Developer",
    date: "Mar-2021",
    expires: "N/A",
    description: "React, Javascript, Python, Html, CSS",
    img: "DojoCert.png",
  },
];
