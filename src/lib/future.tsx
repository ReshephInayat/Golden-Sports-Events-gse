"use client";
import Particle from "@/components/Particle";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
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

const Slider3 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
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
        <div>
          <div className="relative h-full w-full ">
            <span>
              <Link
                className="text-yellow-500 text-6xl p-20 "
                href={`/${"#about"}`}
              >
                ←
              </Link>
            </span>
            <Particle />
            <h1 className="text-4xl text-center mt-40 md:text-6xl text-white lg:text-7xl font-bold uppercase shadow-black">
              Our Mission
            </h1>
            <div className="w-72 h-1 bg-gradient-to-l from-transparent to-yellow-500  mx-auto rounded-full" />
            <Section>
              <div className="text-white ">
                <div className="lg:flex lg:justify-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    className="text-sm md:text-2xl font-extralight mt-10 bg-[#02050a] space-x-6 space-y-6 px-6 py-6 bg-opacity-60 leading-snug max-w-2xl text-center text-pretty flex-wrap "
                  >
                    At <span>Golden Sports Events</span> Company, our mission is
                    to inspire and unite people through the power of sports. We
                    aim to organize and execute top-quality sporting events that
                    promote teamwork, athleticism, and a sense of community.
                    Through our events, we aspire to provide a platform for
                    athletes to showcase their talents, spectators to engage in
                    thrilling experiences, and sponsors to reach a passionate
                    sports audience
                  </motion.p>
                </div>

                <Link href={`/${"#about"}`}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" py-2 px-4 text-lg mt-5 bg-yellow-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                  >
                    (←)
                  </motion.button>
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Slider3;
