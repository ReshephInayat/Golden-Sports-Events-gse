"use client";
import Particle from "@/components/Particle";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
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
          <div className="relative h-[80vh] ">
            <Particle />
            <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-bold font- ">
              <div className="lg:flex lg:justify-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.5 }}
                  className="text-sm md:text-2xl font-extralight mt-80 lg:mt-80 bg-[#02050a] space-x-6 space-y-6 px-6 py-6 bg-opacity-60 leading-snug max-w-2xl text-center text-pretty flex-wrap "
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
                  Back
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Slider3;
