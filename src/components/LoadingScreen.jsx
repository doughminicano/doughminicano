import { motion } from "framer-motion";

const BarLoad = () => {
  return (
    <div className="h-full grid place-content-center bg-black-900/80 px-4 py-24">
      <BarLoader />
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

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-4"
    >
      <motion.div variants={variants} className="h-40 w-2 bg-red-500" />
      <motion.div variants={variants} className="h-40 w-2 bg-blue-500 ml-2" />
      <motion.div variants={variants} className="h-40 w-2 bg-red-500" />
      <motion.div variants={variants} className="h-40 w-2 bg-blue ml-2" />
      <img
        className="animate-spin"
        src="dLogo.png"
        alt="Girl in a jacket"
        width="250"
        height="250"
      />
      <motion.div variants={variants} className="h-40 w-2 bg-blue" />
      <motion.div variants={variants} className="h-40 w-2 bg-red-500 ml-2" />
      <motion.div variants={variants} className="h-40 w-2 bg-blue-500 ml-2" />
      <motion.div variants={variants} className="h-40 w-2 bg-red-500 ml-2" />
    </motion.div>
  );
};

export default BarLoad;
