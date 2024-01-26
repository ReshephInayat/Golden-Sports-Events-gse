"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutEffect from "@/components/AboutEffext";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Sections from "@/components/Sections";
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
                  International Schools Chamionship Kuala Lumpur, Malysia
                </h1>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Basketball U-14
                </p>
                <p className="text-center md:text-3xl text-white mb-4">
                  ● Football U-14
                </p>

                <div className="flex justify-center flex-wrap gap-8 ">
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/TT1.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T1.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T2.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T3.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T4.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T5.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T6.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T7.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T8.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T9.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T10.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T11.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T12.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T13.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T14.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />{" "}
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/T15.png"}
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
                    src={"/InternationalTours/7.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/8.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/9.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/10.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/11.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/12.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/13.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/14.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/15.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/16.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/17.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/18.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/19.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/20.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/21.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/22.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/23.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/InternationalTours/24.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </div>
              </Sections>

              <div className="md:flex justify-between w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
                <Link href={"https://www.aitchison.edu.pk/"} target="_blank">
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                        On Board
                    </h2>
                    <Image
                      className="object-cover bg-yellow-500 px-6 py-6  h-72"
                      src={"/patner7.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">Aitchison College</h1>
                  </Sections>
                </Link>
                <Link href={"https://www.maximevents.asia/"} target="_blank">
                  <Sections>
                    <h2 className="text-4xl text-white text-center pt-2 pb-2 font-semibold">
                      Patners
                    </h2>
                    <Image
                      className="object-cover bg-white px-6 py-6"
                      src={"/patner1.jpg"}
                      alt="image3"
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
