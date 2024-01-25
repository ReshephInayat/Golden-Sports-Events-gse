"use client";
import Particle from "@/components/Particle";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";

const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const Slider2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Element name="about">
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
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-bold  ">
                <div className="lg:flex lg:justify-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm md:text-2xl mt-80 lg:mt-80 bg-[#02050a]  px-6 py-4 font-extralight  bg-opacity-60 leading-snug max-w-2xl text-center text-pretty"
                  >
                    Golden Sports Event Company is a premier event management
                    company specializing in sports events. We pride ourselves on
                    delivering exceptional sports experiences, creating
                    memorable moments for athletes, spectators, and sponsors
                    alike. With a dedicated team of professionals and a passion
                    for sports, we strive to exceed expectations and ensure the
                    success of every event we undertake.
                  </motion.p>
                </div>
                <Link href={`/${"#about"}`}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" py-2 px-4 text-lg mt-5 bg-yellow-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                  >
                    Back
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </Element>
  );
};

export default Slider2;
