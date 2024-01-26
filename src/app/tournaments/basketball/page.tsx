"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutEffect from "@/components/AboutEffext";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Sections from "@/components/Sections";
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
              className="  pt-[2rem] md:pt-[8rem] pb-[2rem] relative "
            >
              <Section>

              <div className="flex justify-center ">
                <Link href={`/${"tournaments"}`}>
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
                    </Section>

              <Sections>
                <h1 className="text-4xl text-white text-center font-semibold mt-8 mb-4 ">
                  Badminton & Table Tennis
                </h1>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Badminton & Table Tennis 
                </p>
                <p className="text-center md:text-3xl text-white mb-4">
                  ● School Campionship
                </p>

                <div className="flex justify-center flex-wrap gap-8 mt-10">
                  <Image
                    className="object-cover"
                    src={"/Basketball/1.jpg"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/Basketball/2.jpg"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/Basketball/3.jpg"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/Basketball/4.jpg"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/Basketball/5.jpg"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                </div>
              </Sections>
              <h2 className="text-4xl text-white text-center pt-24 pb-2 font-semibold">
                      Collaboration
                    </h2>
              <div className="flex justify-center  w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white   ">
                <Link href={"https://www.maximevents.asia/"} target="_blank">
                  <Sections>

                    <Image
                      className="object-cover bg-blue-950 px-6 py-6  w-96 h-64"
                      src={"/patner8.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">LSG 1-A-1</h1>
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
