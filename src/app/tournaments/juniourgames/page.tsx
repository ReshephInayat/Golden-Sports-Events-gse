"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
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
              className="  pt-[2rem] md:pt-[8rem] pb-[6rem] relative "
            >
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

              <div className="flex justify-center flex-wrap gap-8 ">
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image1.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image2.jpg"}
                  alt="image"
                  width={300}
                 height={400}
      />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image3.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image4.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image5.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image6.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image7.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />
                <Image
                  className="object-cover w-auto"
                  src={"/Junior/image8.jpg"}
                  alt="image"
                  width={300}
                  height={400}
                />

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
