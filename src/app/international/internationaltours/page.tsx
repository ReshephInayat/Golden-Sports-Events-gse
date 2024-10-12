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

const internationalTourImages = [
  "/InternationalTours/TT1.png",
  "/InternationalTours/T1.png",
  "/InternationalTours/T2.png",
  "/InternationalTours/T3.png",
  "/InternationalTours/T4.png",
  "/InternationalTours/T5.png",
  "/InternationalTours/T6.png",
  "/InternationalTours/T7.png",
  "/InternationalTours/T8.png",
  "/InternationalTours/T9.png",
  "/InternationalTours/T10.png",
  "/InternationalTours/T11.png",
  "/InternationalTours/T12.png",
  "/InternationalTours/T13.png",
  "/InternationalTours/T14.png",
  "/InternationalTours/T15.png",
  "/InternationalTours/1.png",
  "/InternationalTours/2.png",
  "/InternationalTours/3.png",
  "/InternationalTours/4.png",
  "/InternationalTours/5.png",
  "/InternationalTours/6.png",
  "/InternationalTours/7.png",
  "/InternationalTours/8.png",
  "/InternationalTours/9.png",
  "/InternationalTours/10.png",
  "/InternationalTours/11.png",
  "/InternationalTours/12.png",
  "/InternationalTours/13.png",
  "/InternationalTours/14.png",
  "/InternationalTours/15.png",
  "/InternationalTours/16.png",
  "/InternationalTours/17.png",
  "/InternationalTours/18.png",
  "/InternationalTours/19.png",
  "/InternationalTours/20.png",
  "/InternationalTours/21.png",
  "/InternationalTours/22.png",
  "/InternationalTours/23.png",
  "/InternationalTours/24.png",
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
                <Link href={`/${"international"}`}>
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
                <h1 className="text-4xl text-white text-center font-semibold mt-8 mb-4 ">
                  International Schools Championship Kuala Lumpur, Malaysia
                </h1>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Basketball U-14
                </p>
                <p className="text-center md:text-3xl text-white mb-4">
                  ● Football U-14
                </p>

                {/* Render International Tour images using map */}
                <div className="flex justify-center flex-wrap gap-8">
                  {internationalTourImages.map((src, i) => (
                    <Image
                      key={i}
                      className="object-cover"
                      src={src}
                      alt={`International Tour Image ${i + 1}`}
                      width={300}
                      height={300}
                    />
                  ))}
                </div>
              </Sections>

              <div className="md:flex justify-between w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <Link href={"https://www.aitchison.edu.pk/"} target="_blank">
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      On Board
                    </h2>
                    <Image
                      className="object-cover bg-yellow-500 px-6 py-6  h-72"
                      src={"/patner7.png"}
                      alt="Aitchison College"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">
                      Aitchison College
                    </h1>
                  </Sections>
                </Link>
                <Link href={"https://www.maximevents.asia/"} target="_blank">
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Partners
                    </h2>
                    <Image
                      className="object-cover bg-white px-6 py-6"
                      src={"/patner1.jpg"}
                      alt="Maxim Events"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">Maxim Events</h1>
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
