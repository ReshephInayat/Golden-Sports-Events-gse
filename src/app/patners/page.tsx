"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import Link from "next/link";
import Sections from "@/components/Sections";

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
      <Element name="#events">
        <div
          id="events"
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
              className="  pt-[2rem] md:pt-[8rem] pb-[10rem] relative "
            >
              <div className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] uppercase font-bold shadow-black mt-10 ">
                <Link href={`/${"#events"}`}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
                <Link href={"https://www.maximevents.asia/"} target="_blank">
                  <Image
                    className="object-cover bg-white px-6 py-6"
                    src={"/patner1.jpg"}
                    alt="image3"
                    width={400}
                    height={400}
                  />
                  <h1 className="text-2xl text-center py-4">Maxim Events</h1>
                </Link>
                <Link href={"https://www.bslclub.com/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-cover bg-black px-6 py-6"
                      src={"/patner3.jpg"}
                      alt="image1"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4 ">
                      Bangkok Soccer League
                    </h1>
                  </Sections>
                </Link>
                <Link href={"https://pfabangkok.com/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-cover bg-white px-6 py-6"
                      src={"/patner2.jpg"}
                      alt="image2"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4 ">PFA Bangkok</h1>
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
