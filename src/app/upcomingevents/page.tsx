"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Sections";
const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

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
      <Element name="#about">
        <div
          id="about"
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
                height: "100vh",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="  pt-[3rem] md:pt-[rem] pb-[rem] relative "
              >
                <div className="flex justify-center pb-8 pt-2">
                  <Link href={`/${"#news"}`}>
                    {" "}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      className=" py-2 px-4 text-lg  bg-red-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full "
                    >
                      Back
                    </motion.button>
                  </Link>
                </div>
                <h1 className="text-6xl text-white text-center font-bold mt-8">
                  UPCOMING EVENTS
                </h1>
                <h2 className="text-4xl text-white text-center pt-6 font-semibold">
                  {" "}
                  National
                </h2>
                <p className="text-center md:text-2xl text-white">
                  → Throwball Campions Girls
                </p>
                <p className="text-center md:text-2xl text-white">
                  → Throwball Campions Boys
                </p>
                <h2 className="text-4xl text-white text-center pt-6 font-semibold">
                  {" "}
                  International
                </h2>
                <p className="text-center md:text-2xl text-white">
                  → International Schools Champions Girls <br />
                  Kuala Lumpur, Malaysia
                </p>
                <p className="text-center md:text-2xl text-white">
                  → Bangkok International Youth Football Festival <br />{" "}
                  Bangkok, Tailand
                </p>
                <p className="text-center md:text-2xl text-white">
                  → KLI Football Championship
                </p>
              </motion.div>
            </Section>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
