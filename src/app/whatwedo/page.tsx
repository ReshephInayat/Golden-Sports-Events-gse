"use client";
import Particle from "@/components/Particle";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Section from "@/components/Sections";

const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const Slider4 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
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
          exit={{ opacity: 0 }}
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
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-bold  "
              >
                <div className="lg:flex lg:justify-center">
                  <div className="text-sm md:text-2xl mt-80 lg:mt-80 bg-[#02050a]  font-extralight px-6 py-6 bg-opacity-60 leading-loose max-w-2xl text-center">
                    <p className="leading-normal text-center text-pretty">
                      Event Planning and Management
                    </p>
                    <p className=" leading-normal text-center text-pretty">
                      Venue Selection and Setup
                    </p>
                    <p className=" leading-normal text-center text-pretty">
                      Spectator Engagement
                    </p>
                    <p className="leading-normal text-center text-pretty">
                      Athlete Management
                    </p>
                    <p className="leading-normal text-center text-pretty">
                      Sponsorship and Branding
                    </p>
                    <p>
                      We organize sports events for schools or clubs And
                      international sports tours as well
                    </p>
                  </div>
                </div>
                <Link href={`/${"#about"}`}>
                  {" "}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    className=" py-2 px-4 text-lg mt-5 bg-yellow-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                  >
                    Back
                  </motion.button>{" "}
                </Link>
              </motion.div>
            </Section>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Slider4;
