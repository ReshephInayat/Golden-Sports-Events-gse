import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";

const TextEffect = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <TypeAnimation
        sequence={[
          "Golden Sports Events",
          1500,
          '"Unlock the Golden Path to Victory"',
          1000,
          "CEO Muddassar Iqbal Butt",
          1500,
          "Tournaments",
          1000,
          "International Tours",
          1000,
          "Competions",
          1000,
          "And Much More",
          1000,
        ]}
        speed={50}
        className="text-[2rem] md:text-[3rem] "
        repeat={Infinity}
      />
    </motion.div>
  );
};

export default TextEffect;
