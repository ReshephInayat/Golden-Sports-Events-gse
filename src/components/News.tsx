"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import {
  ChevronDoubleUpIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/16/solid";
import Sections from "./Sections";
import NewsEffect from "./NewsEffect";

const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
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
      <Element name="#news">
        <div
          id="news"
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
              className="  pt-[4rem] md:pt-[8rem] pb-[10rem] relative "
            >
              <div className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] uppercase font-bold shadow-black mt-10 ">
                <NewsEffect/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white ">
                <Sections>
                  <Link href={"/upcomingevents"}>
                    <div>
                      <div className="bg-black bg-opacity-20 hover:bg-[#02050a] hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          News
                        </h1>
                        <p className="text-[25px]">
                       Upcoming Events
                        </p>
                      </div>
                    </div>
                  </Link>
                </Sections>
                <Sections>
                  <Link href={"/collaboration"}>
                    <div>
                      <div className="bg-yellow-600 hover:bg-[#02050a] hover:bg-opacity-20 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[6rem h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Collaboration
                        </h1>
                        <p className="text-[25px]">
                        Our Collabs with patners
                        </p>
                      </div>
                    </div>
                  </Link>
                </Sections>
               
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;