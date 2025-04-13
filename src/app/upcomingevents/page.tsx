"use client";

import { AnimatePresence, motion } from "framer-motion";
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

const EventsNationalImages = ["/Events/image1.jpg", "/Events/image2.jpg"];
const EventsInterNationalImages = ["/Events/image3.jpg", "/Events/image4.jpg"];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [showNationalImages, setShowNationalImages] = useState(false);
  const [showInterNationalImages, setShowInterNationalImages] = useState(false);

  const handleNationalShowImages = () => {
    setShowNationalImages(!showNationalImages);
  };

  const handleInterNationalShowImages = () => {
    setShowInterNationalImages(!showInterNationalImages);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-[3rem] md:pt-[2.5rem] pb-[8rem] relative"
              >
                <div className="flex justify-center pb-8 pt-2">
                  <Link href="/#events">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      className="py-2 px-4 text-lg bg-red-500 text-white md:text-3xl md:py-3 md:px-10 md:rounded-full"
                    >
                      Back
                    </motion.button>
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="md:text-6xl text-2xl text-white bg-[#02050a] inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    UPCOMING EVENTS 2025
                  </h1>
                </div>
                <br></br>
                <div className="flex flex-col justify-center items-center">
                  
                 <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE X PICA Dubai Cricket
                  <br />
                  In June 2025
                  </p>
                  <br/>
                  <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE Breadford Cricket Tournament
                  <br />
                  In July 2025
                  </p>
                  <br/>
                  <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE Baku Sports Festival
                  <br />
                  In June 2025
                  </p>
                  <br/>
                  <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE x Veelsports x Pickleball Pakistan 
                  
                  <br />
                  Lahore Pickleball Championship 1.0
                  </p>
                  <br/>
                  <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE x 313 Fitness Club 
                  
                  <br />
                  LFit in 5 Lahore Edition
                  </p>
                  <br/>
                  <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  GSE Squid Games REAL LIFE
                  <br />
                  In April 2025
                  </p>
                  {/* <h1 className="text-3xl text-white bg-yellow-600 inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    National Events
                  </h1> */}

                </div>

                {/* <p className="cursor-pointer text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span> Fit in 5
                </p>
                <p className="cursor-pointer text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span> Champions
                  Arena
                </p> */}

                <div className="flex justify-center items-center">

                  {/* <button
                    onClick={handleNationalShowImages}
                    className="flex text-white bg-red-600 px-4 py-2 my-2 rounded"
                  >
                    See Posters
                  </button> */}

                </div>
                {showNationalImages && (
                  <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full h-full">
                    {EventsNationalImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          priority
                          src={image}
                          alt="Event Image"
                          width={300}
                          height={300}
                          className="w-[500px] h-[300px] object-cover px-5 md:px-0 rounded-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="flex justify-center items-center">

                  {/* <h1 className="md:text-3xl text-xl text-white bg-yellow-600 inline text-center font-bold mt-6 px-8 py-3 rounded-lg">
                    International Events
                  </h1> */}

                </div>

                {/* <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  International Sports Festival
                  <br />
                  Dubai
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span> U-19
                  Dubai Basketball Championship for boys & girls from 15th till
                  <br />
                  22nd January with the collaboration of Pakistan Association
                  <br />
                  Dubai
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span> U-19
                  International sports festival Dubai boys and girls U-12 and
                  <br />
                  U-16 from 18th till 25th February 2025 Dubai
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>{" "}
                  Basketball Championship DUBAI, Bangkok, Thailand
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Asian Football Festival, Qatar
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Friendship Cup, Azerbaijan Baku
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  Futsal Cup, Turkey
                </p>
                <p className="text-center md:text-2xl m-2 text-white">
                  <span className="text-yellow-400 font-bold">→</span>
                  International Schools Championship, Kuala Lumpur Malaysia
                </p> */}

                <div className="flex justify-center items-center">

                  {/* <button
                    onClick={handleInterNationalShowImages}
                    className="flex text-white bg-red-600 px-4 py-2 my-2 rounded"
                  >
                    See Posters
                  </button> */}

                </div>
                {showInterNationalImages && (
                  <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full h-full">
                    {EventsInterNationalImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          priority
                          src={image}
                          alt="Event Image"
                          width={300}
                          height={300}
                          className="w-[500px] h-[300px]  px-5 md:px-0 rounded-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </Section>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;
