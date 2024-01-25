"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
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
              <div className="flex justify-center pb-8">
                <Link href={`/${"tournaments"}`}>
                  {" "}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    className=" py-2 px-4 text-lg  bg-red-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full "
                  >
                    Back
                  </motion.button>{" "}
                </Link>
              </div>


              <div className="flex justify-center flex-wrap gap-8 ">
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image1.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                  />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image2.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                  />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image3.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                  />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image4.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                  />
                
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image5.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image6.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image7.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image8.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image9.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image10.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image11.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image12.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image13.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image14.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image15.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image16.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image17.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image18.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image19.jpg"}
                  alt="image"
                  width={300}
                  height={300}
                />
                <Image
                  className="object-cover"
                  src={"/AzadiImages/image20.jpg"}
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
