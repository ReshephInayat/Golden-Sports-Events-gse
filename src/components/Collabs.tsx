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
import NewsEffect from "./CollabEffect";
import Head from "next/head";

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
      <Head>
        <title>Golden Sports Events</title>
        <meta
          name="description"
          content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs. From thrilling tournaments to exciting competitions, we specialize in curating dynamic experiences that inspire teamwork, skill development, and sportsmanship. Additionally, embark on unforgettable international tours curated by our expert team, offering unparalleled opportunities for athletes to explore new cultures, compete on a global stage, and create lifelong memories. Join us in fostering a passion for sports, fostering camaraderie, and creating lasting connections through the power of athletics. Start your journey with Golden Sports Events today!"
        />
        <meta property="og:title" content="Golden Sports Events " />
        <meta
          property="og:description"
          content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs. From thrilling tournaments to exciting competitions, we specialize in curating dynamic experiences that inspire teamwork, skill development, and sportsmanship. Additionally, embark on unforgettable international tours curated by our expert team, offering unparalleled opportunities for athletes to explore new cultures, compete on a global stage, and create lifelong memories. Join us in fostering a passion for sports, fostering camaraderie, and creating lasting connections through the power of athletics. Start your journey with Golden Sports Events today!"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:card" content="/images/logo.png" />
        <meta
          name="twitter:description"
          content="Unlock The Golden Path To Victory"
        ></meta>
        <link rel="canonical" href="https://goldensportsevents.com/" />
      </Head>
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
                <NewsEffect />
                <div className="w-32 h-1 bg-gradient-to-l from-transparent to-red-800  mx-auto rounded-full" />
              </div>
              <div className="grid grid-cols-1 gap-10 justify-center w-[80%] md:w-[40%]  mx-auto items-center  mt-[2rem] text-white ">
                <Sections>
                  <Link href={"/collaboration"}>
                    <div>
                      <div className="bg-gradient-to-t from-red-800 to-black/30 rounded-lg hover:transition-all hover:duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[4rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          Collaboration
                        </h1>
                        <p className="text-[20px]">Our Collabs with patners</p>
                      </div>
                    </div>
                  </Link>
                </Sections>
                {/* <Sections>
                  <Link href={"/gallery"}>
                    <div>
                      <div className="bg-yellow-600 hover:bg-[#02050a] hover:bg-opacity-20 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[6rem h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          Gallery
                        </h1>
                        <p className="text-[25px]">Collaborations</p>
                      </div>
                    </div>
                  </Link>
                </Sections> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
