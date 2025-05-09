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
                    className="py-2 px-4 text-lg bg-red-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                  >
                    Back
                  </motion.button>
                </Link>
              </div>
              <div className=" flex flex-col md:flex-row  justify-center w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
                <Link href={"/"}>
                  <Sections>
                    {/* <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Collaboration with
                    </h2> */}
                    <Image
                      className="object-contain  bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner13.jpeg"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Global Services
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-contain bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner15.png"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      313 Fitness Club
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-contain bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner16.png"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Pikle Ball Pakistan
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-contain bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner17.jpg"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Veel Sports
                    </h1>
                  </Sections>
                </Link>
              </div>
              <div className=" flex flex-col md:flex-row  justify-center w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
              <Link href={"/"}>
                  <Sections>
                    <Image
                      className="object-cover bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner14.jpeg"}
                      alt="image3"
                      width={1000}
                      height={1000}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Pak Lions
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"}>
                  <Sections>
                    {/* <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Collaboration with
                    </h2> */}
                    <Image
                      className="object-contain  bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner11.png"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Punjab Olympic 
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"}>
                  <Sections>
                    <Image
                      className="object-cover bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner8.png"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      LGS Roots School
                    </h1>
                  </Sections>
                </Link>
                <Link href={"/"} target="_blank">
                  <Sections>
                    <Image
                      className="object-contain bg-white px-6 py-6 w-[300px] h-[300px]"
                      src={"/patner12.png"}
                      alt="image3"
                      width={500}
                      height={500}
                    />
                    <h1 className="text-2xl text-center py-4">
                      The City School
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
