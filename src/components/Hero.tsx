import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { Element } from "react-scroll";
import NavbarHome from "./NavbarHome";
import Section from "./Sections";

const images: string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Slider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <NavbarHome />
      <Element name="home">
        <div
          id="#home"
          className="relative w-full h-screen overflow-hidden"
        >
          <AnimatePresence exitBeforeEnter={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.001 }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
            />
            <div className="relative h-[80vh] ">
              <Particle />
              {/* Text container */}
              <Section>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage src={"/images/logo.png"} alt="" />
                </Suspense>
              </Section>
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-bold font-serif ">
                <TextEffect />
              </div>
            </div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

// Component for lazy loading images
const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoadedSrc(src);
    };
    image.src = src;
  }, [src]);

  return <img className="absolute transform -translate-x-1/2 -translate-y-1/2 top-60 md:top-64 left-1/2 md:w-60 w-36 md:h-60 h-36" src={loadedSrc ?? ''} alt={alt} />;
};

export default Slider;
