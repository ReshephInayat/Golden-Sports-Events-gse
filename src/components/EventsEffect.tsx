import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";

const EventEffect = () => {
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
          1500,
          "Events & News ",
          1500,
          "   ",
          1000,
          "Events& News",
          1500,
          "  ",
          1000,
          "Events & News",
          1500,
          "   ",
          1000,
          "Events & News",
          1500,
        ]}
        speed={30}
        className="text-2xl md:text-4xl underline"
        repeat={Infinity}
      />
    </motion.div>
  );
};

export default EventEffect;
