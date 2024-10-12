"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Sections from "@/components/Sections";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/image5.jpg",
];

const galleryImages = [
  { src: "/gallery/image1.jpg", width: 400, height: 400 },
  { src: "/gallery/image5.jpg", width: 400, height: 400 },
  { src: "/gallery/image3.jpg", width: 400, height: 400 },
  { src: "/gallery/image2.jpg", width: 400, height: 400 },
  { src: "/gallery/image6.jpg", width: 400, height: 300 },
  { src: "/gallery/image7.jpg", width: 400, height: 400 },
  { src: "/gallery/image8.jpg", width: 400, height: 400 },
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
              <div className="flex justify-center ">
                <Link href={`/${""}`}>
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

              <Sections>
                <div className="flex justify-center flex-wrap gap-40 mt-20 ">
                  {galleryImages.map((image, i) => (
                    <Image
                      key={i}
                      className="object-cover"
                      src={image.src}
                      alt={`Gallery Image ${i + 1}`}
                      width={image.width}
                      height={image.height}
                    />
                  ))}
                </div>
              </Sections>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
