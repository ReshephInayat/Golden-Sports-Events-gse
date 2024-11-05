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
            height: "100%",
            // overflow: "hidden",
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
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="  pt-[3rem] md:pt-[2.5rem] pb-[8rem] relative "
              >
                <div className="flex justify-center pb-8 pt-2">
                  <Link href={`/${"#events"}`}>
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
                <div className="flex justify-center items-center">
                  <h1 className="md:text-6xl text-2xl text-white bg-[#02050a] inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    UPCOMING EVENTS 2025
                  </h1>
                </div>
                {/* <div className="flex justify-center items-center">
                  <h1 className="text-3xl text-white bg-yellow-600 inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    National Events
                  </h1>
                </div> */}

                <div className="flex justify-center items-center">
                  <h1 className="md:text-3xl text-xl text-white bg-yellow-600 inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    International Events
                  </h1>
                </div>

                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  International Sports Festival
                  <br />
                  Dubai
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Basketball Championship DUBAI, Bangkok, Tailand
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Asian Football Festival, Qatar
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Friendship Cup, Azerbaijan Baku
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Futsal Cup, Turkey
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  International Schools Championship, Kuala Lumpur Malaysia
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
