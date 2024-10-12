"use client";
import { AnimatePresence, motion } from "framer-motion";
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
];

const juniorImages = [
  "/JuniorImages/1.png",
  "/JuniorImages/2.png",
  "/JuniorImages/3.png",
  "/JuniorImages/4.png",
  "/JuniorImages/5.png",
  "/JuniorImages/6.png",
  "/JuniorImages/7.png",
  "/JuniorImages/8.png",
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
              className="  pt-[2rem] md:pt-[8rem] pb-[6rem] relative "
            >
              <Section>
                <div className="flex justify-center pb-8">
                  <Link href={`/${"tournaments"}`}>
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

                <h1 className="text-4xl text-white text-center font-semibold mt-8 mb-4 ">
                  Junior Games{" "}
                </h1>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Cricket, Futsal, Dodgeball, Throwball
                </p>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Basketball, Tug of War, Karate, Badminton
                </p>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Bean Bag Throw, Table Tennis
                </p>
              </Section>

              {/* Render Junior Images using map */}
              <Section>
                <div className="flex justify-center flex-wrap gap-8 mt-14 ">
                  {juniorImages.map((src, i) => (
                    <Image
                      key={i}
                      className="object-cover"
                      src={src}
                      alt={`Junior Image ${i + 1}`}
                      width={300}
                      height={400}
                    />
                  ))}
                </div>
              </Section>

              <div className="flex justify-center w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <Link href={"https://futureworld.edu.pk/"} target="_blank">
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Collaboration with
                    </h2>
                    <Image
                      className="object-cover bg-white px-6 py-6"
                      src={"/images/colabroot.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Roots Future World School, Phase 6, DHA
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
