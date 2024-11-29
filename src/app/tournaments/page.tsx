"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import {
  ChevronDoubleUpIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/16/solid";
import Section from "@/components/Sections";
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/image5.jpg",
  // "/images/image1.jpg",
  // "/images/image4.jpg",
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
              className="  pt-[1rem] md:pt-[8rem] pb-[10rem] relative "
            >
              <div className="flex justify-center pb-2">
                <Link href={`/${"#events"}`}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" py-2 px-4 text-lg mt-5 bg-red-500 text-white md:text-3xl md:py-3  md:px-10 md:rounded-full"
                  >
                    Back
                  </motion.button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] mb-10 text-white  ">
                <Section>
                  <Link href={"/tournaments/basketball"}>
                    <div>
                      <div className="bg-gradient-to-t from-black rounded-lg hover:bg-gradient hover:from-yellow-500 hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[4rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[28px] mt-[1.5rem] mb-[1.5rem]">
                          Badminton & Tennis
                        </h1>
                      </div>
                    </div>
                  </Link>
                </Section>
                <Section>
                  <Link href={"/tournaments/azadigames"}>
                    <div>
                      <div className="bg-gradient-to-t from-yellow-500 rounded-lg hover:bg-gradient hover:from-black hover:scale-110 hover:transition-all hover:duration-500 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          Azadi Games
                        </h1>
                      </div>
                    </div>
                  </Link>
                </Section>

                <Section>
                  <Link href={"/tournaments/juniorgames"}>
                    <div>
                      <div className="bg-gradient-to-t from-black rounded-lg hover:bg-gradient hover:from-yellow-500 hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[6rem h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          Junior Games
                        </h1>
                      </div>
                    </div>
                  </Link>
                </Section>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
