"use client";
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { Element } from "react-scroll";
import NavbarHome from "./NavbarHome";
import Head from "next/head";
import Image from "next/image";

// Metadata component for reusability
const HeadMeta: React.FC = () => (
  <Head>
    <title>Golden Sports Events</title>
    <meta
      name="description"
      content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs..."
    />
    <meta property="og:title" content="Golden Sports Events " />
    <meta
      property="og:description"
      content="Welcome to Golden Sports Events, your premier destination for organizing unforgettable sports events..."
    />
    <meta property="og:image" content="/images/logo.png" />
    <meta name="twitter:card" content="/images/logo.png" />
    <meta
      name="twitter:description"
      content="Unlock The Golden Path To Victory"
    />
    <link rel="canonical" href="https://goldensportsevents.com/" />
  </Head>
);

// Images for carousel
const images: string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

// Image carousel with lazy loading
const ImageCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter={false}>
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.001 }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
    </AnimatePresence>
  );
};

// Optimized logo component using Next.js Image with priority for performance
const CompanyLogo: React.FC = () => (
  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-60 md:top-64 left-1/2 transition-transform duration-700 ease-in-out">
    <Image
      src="/images/logo.png"
      alt="Golden Sports Events Logo"
      width={240}
      height={240}
      className="md:w-60 w-36 md:h-60 h-36"
      priority
    />
  </div>
);

// Main Slider component
const Slider: React.FC = () => (
  <>
    <HeadMeta />
    <div>
      <NavbarHome />
    </div>
    <Element name="home">
      <div id="#home" className="relative w-full min-h-screen overflow-hidden">
        <ImageCarousel />
        <div className="relative h-[80vh] flex justify-center items-center">
          <Particle />
          <Suspense fallback={<div>Loading...</div>}>
            <CompanyLogo />
          </Suspense>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold transition-opacity duration-500">
            <TextEffect />
          </div>
        </div>
      </div>
    </Element>
  </>
);

export default Slider;
