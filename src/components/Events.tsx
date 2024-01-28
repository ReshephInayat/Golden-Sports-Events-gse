import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { Element } from "react-scroll";
import NavbarHome from "./NavbarHome";
import Sections from "./Sections";
import EventsEffect from "./EventsEffect";
// import LazyImage from "./LazyImage"; // Import LazyImage component
import { ChevronDoubleUpIcon } from "@heroicons/react/16/solid";

const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoadedSrc(src);
    };
    image.src = src;
  }, [src]);

  return <img src={loadedSrc ?? ''} alt={alt} />;
};

const images: string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/image5.jpg",
  "/images/image1.jpg",
  "/images/image4.jpg",
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
      <NavbarHome />
      <Element name="#events">
        <div
          id="events"
          className="relative w-full h-screen overflow-hidden"
        >
          <AnimatePresence exitBeforeEnter={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="  pt-[4rem] md:pt-[8rem] pb-[10rem] relative "
            >
              <div className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] uppercase font-bold shadow-black mt-10 ">
                <EventsEffect />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white ">
                <Sections>
                  <a href="/tournaments">
                    <div className="bg-black bg-opacity-20 hover:bg-[#02050a] hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                      <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
                      <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Tournaments
                      </h1>
                      <p className="text-[25px]">
                        Compete fiercely, play fair, champions emerge in
                        spirited tournaments
                      </p>
                    </div>
                  </a>
                </Sections>
                <Sections>
                  <a href="/international">
                    <div className="bg-yellow-600 hover:bg-[#02050a] hover:bg-opacity-20 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                      <ChevronDoubleUpIcon className="w-[6rem h-[6rem] mx-auto text-white" />
                      <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        International Tours
                      </h1>
                      <p className="text-[25px]">
                        We arrange international sports tours for schools & clubs
                      </p>
                    </div>
                  </a>
                </Sections>
                <Sections>
                  <a href="/patners">
                    <div className="bg-black bg-opacity-20 hover:bg-[#02050a] hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
                      <ChevronDoubleUpIcon className="w-[6rem h-[6rem] mx-auto text-white" />
                      <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Partnership
                      </h1>
                      <p className="text-[25px]">
                        Partnership where shared goals create lasting mutual
                        achievements
                      </p>
                    </div>
                  </a>
                </Sections>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
