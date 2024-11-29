"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutEffect from "./AboutEffext";
import { Element } from "react-scroll";
import Link from "next/link";
import Section from "./Sections";
import {
  ChevronDoubleUpIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/16/solid";
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              className="  pt-[4rem] md:pt-[8rem] pb-[10rem] relative "
            >
              <div className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] uppercase font-bold shadow-black mt-10 ">
                <AboutEffect />
              </div>
              <div className="w-28 h-1 bg-gradient-to-l from-transparent to-yellow-500  mx-auto rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white ">
                <Section>
                  <Link href={"/ourmission"}>
                    <div>
                      <div className="bg-gradient-to-t from-black rounded-lg hover:bg-gradient hover:from-yellow-500 hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[4rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          Our Mission
                        </h1>
                        <p className="text-[20px]">
                          our Mission Is To Inspire And Unite People Through The
                          Power Of Sports
                        </p>
                      </div>
                    </div>
                  </Link>
                </Section>
                <Section>
                  <Link href={"/aboutus"}>
                    <div>
                      <div className="bg-gradient-to-t from-yellow-500 rounded-lg hover:bg-gradient hover:from-black hover:scale-110 hover:transition-all hover:duration-500 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[4rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          About Us
                        </h1>
                        <p className="text-[20px]">
                          We pride ourselves on delivering exceptional sports
                          experiences
                        </p>
                      </div>
                    </div>
                  </Link>
                </Section>
                <Section>
                  <Link href={"/whatwedo"}>
                    <div>
                      <div className="bg-gradient-to-t from-black rounded-lg hover:bg-gradient hover:transition-all hover:duration-500 hover:from-yellow-500 hover:scale-110 transition-all duration-500 uppercase font-semibold text-center p-[2rem]">
                        <ChevronDoubleUpIcon className="w-[4rem] h-[6rem] mx-auto text-white" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                          What We Do
                        </h1>
                        <p className="text-[20px]">
                          We organize sports events And international sports
                          tours
                        </p>
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