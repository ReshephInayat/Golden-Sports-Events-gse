"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { Element } from "react-scroll";
import NavbarHome from "./NavbarHome";

const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
      <NavbarHome />
      <Element name="home">
        <div
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
            <div>
              <div className="relative h-[80vh] ">
                <Particle />
                {/* Text container */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-bold font-serif ">
                  <TextEffect />
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
