"use client";
import { AnimatePresence, motion} from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import TeamEffect from "./TeamEffect";
import TeamSlider from "./TeamSlider";

const images = ["/images/image2.jpg"];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Element name="#team">
        <div
          id="team"
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <AnimatePresence exitBeforeEnter={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="  pt-[2rem] md:pt-[rem] pb-[10rem] relative "
            >
              <div className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] uppercase font-bold shadow-black mt-10 ">
                <TeamEffect />
              </div>
              <div className="w-28 h-1 bg-gradient-to-l from-transparent to-yellow-500  mx-auto rounded-full" />
              <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
                <TeamSlider />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;