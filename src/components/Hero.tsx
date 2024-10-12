"use client";
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { Element } from "react-scroll";
import NavbarHome from "./NavbarHome";
import Section from "./Sections";
import Head from "next/head";

const images: string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
];

const Slider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Golden Sports Events</title>
        <meta
          name="description"
          content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs. From thrilling tournaments to exciting competitions, we specialize in curating dynamic experiences that inspire teamwork, skill development, and sportsmanship. Additionally, embark on unforgettable international tours curated by our expert team, offering unparalleled opportunities for athletes to explore new cultures, compete on a global stage, and create lifelong memories. Join us in fostering a passion for sports, fostering camaraderie, and creating lasting connections through the power of athletics. Start your journey with Golden Sports Events today!"
        />
        <meta property="og:title" content="Golden Sports Events " />
        <meta
          property="og:description"
          content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs. From thrilling tournaments to exciting competitions, we specialize in curating dynamic experiences that inspire teamwork, skill development, and sportsmanship. Additionally, embark on unforgettable international tours curated by our expert team, offering unparalleled opportunities for athletes to explore new cultures, compete on a global stage, and create lifelong memories. Join us in fostering a passion for sports, fostering camaraderie, and creating lasting connections through the power of athletics. Start your journey with Golden Sports Events today!"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:card" content="/images/logo.png" />
        <meta
          name="twitter:description"
          content="Unlock The Golden Path To Victory"
        ></meta>
        <link rel="canonical" href="https://goldensportsevents.com/" />
      </Head>
      <NavbarHome />
      <Element name="home">
        <div id="#home" className="relative w-full h-screen overflow-hidden">
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
              <Section>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage src={"/images/logo.png"} alt="Company Logo" />
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

const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoadedSrc(src);
    };
    image.src = src;
  }, [src]);

  return (
    <img
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-60 md:top-64 left-1/2 md:w-60 w-36 md:h-60 h-36"
      src={loadedSrc ?? ""}
      alt={alt}
    />
  );
};

export default Slider;
