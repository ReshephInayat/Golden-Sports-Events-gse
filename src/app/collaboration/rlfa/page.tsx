"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Sections from "@/components/Sections";
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
              exit={{ opacity: 0 }}
              className="pt-[2rem] md:pt-[8rem] pb-[6rem] relative "
            >
              <div className="flex justify-center pb-8">
                <Link href={`/${"collaboration"}`}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    className=" py-2 px-4 text-lg  bg-red-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                  >
                    Back
                  </motion.button>
                </Link>
              </div>
              <Section>
                <h1 className="text-white text-center text-xl md:text-2xl font-semibold p-5 bg-black bg-opacity-60">
                  {/* Embarking on a journey of excellence with GSE x RLFA
                  collaboration. ⚽️✨ Stay synced for thrilling updates and
                  unforgettable moments! #GSExRLFA #FootballCollaboration
                  #SoccerJourney #lahore #islamabad #karachi */}
                                  In Process.....
                </h1>
              </Section>
              {/* <Section>
                <div className="flex flex-col justify-center items-center md:flex-row mt-10  md:border-8 border-solid border-white">
                  <video
                    src="\video.mp4"
                    className="md:hidden w-[80%] h-auto  "
                    autoPlay
                    loop
                  ></video>
                  <video
                    src="\video.mp4"
                    className="w-[20%] h-auto hidden md:flex"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <video
                    src="\video.mp4"
                    className="w-[20%] h-auto hidden md:flex"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <video
                    src="\video.mp4"
                    className="w-[20%] h-auto hidden md:flex "
                    autoPlay
                    loop
                    muted
                  ></video>
                  <video
                    src="\video.mp4"
                    className="w-[20%] h-auto hidden md:flex "
                    autoPlay
                    loop
                    muted
                  ></video>
                  <video
                    src="\video.mp4"
                    className="w-[20%] h-auto hidden md:flex"
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              </Section> */}
              <div className="flex justify-center w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
                <Link
                  href={"https://www.instagram.com/reallahorefc/?hl=en"}
                  target="_blank"
                >
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Collaboration with
                    </h2>
                    <Image
                      className="object-cover bg-white px-6 py-6"
                      src={"/patner9.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Real Lahore FC
                    </h1>
                  </Sections>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
