"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutEffect from "@/components/AboutEffext";
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
              className="  pt-[2rem] md:pt-[8rem] pb-[2rem] relative "
            >
              <div className="flex justify-center pb-8">
                <Link href={`/${"#events"}`}>
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
              <div className="flex justify-center flex-wrap gap-8 ">
                <Image
                  className="object-cover"
                  src={"/Images/TT1.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T1.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T2.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T3.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T4.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T5.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T6.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T7.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T8.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T9.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T10.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T11.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T12.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T13.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T14.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />{" "}
                <Image
                  className="object-cover"
                  src={"/Images/T15.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/1.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/2.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/3.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/4.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/5.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/InternationalTours/6.png"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/7.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/8.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/9.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/10.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/11.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/12.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/13.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/14.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/15.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/16.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/17.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/18.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/19.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/20.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/21.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/22.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/23.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/Images/24.jpg"}
                  alt="image"
                  width={300}
                  height={300}
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
