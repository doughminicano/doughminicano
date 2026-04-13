import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
/* eslint-disable react/prop-types */

const BarLoad = () => {
  const { active, progress } = useProgress();

  if (!active) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-content-center bg-slate-950/95 px-4 py-24 text-white">
      <BarLoader progress={progress} />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = ({ progress }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex items-center gap-4"
      >
        <motion.div variants={variants} className="h-40 w-2 bg-red-500" />
        <motion.div variants={variants} className="ml-2 h-40 w-2 bg-blue-500" />
        <motion.div variants={variants} className="h-40 w-2 bg-red-500" />
        <motion.div variants={variants} className="ml-2 h-40 w-2 bg-blue-500" />
        <img
          className="h-32 w-32 animate-spin object-contain sm:h-52 sm:w-52"
          src="/dLogo.png"
          alt="Doughminicano logo"
        />
        <motion.div variants={variants} className="h-40 w-2 bg-blue-500" />
        <motion.div variants={variants} className="ml-2 h-40 w-2 bg-red-500" />
        <motion.div variants={variants} className="ml-2 h-40 w-2 bg-blue-500" />
        <motion.div variants={variants} className="ml-2 h-40 w-2 bg-red-500" />
      </motion.div>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
        Loading experience
      </p>
      <p className="text-lg font-bold text-white">{Math.round(progress)}%</p>
    </div>
  );
};

export default BarLoad;
