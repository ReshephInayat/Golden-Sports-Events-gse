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
              <Section>
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

                <h1 className="text-4xl text-white text-center font-semibold mt-8 mb-4 ">
                  Azadi Games{" "}
                </h1>
                <p className="text-center md:text-3xl text-white mb-2">
                  ● Cricket, Futsal, Dodge The Ball, Ultimate Frizbee
                </p>
                <p className="text-center md:text-3xl text-white mb-2">
                ● Ultimate Frizbee, Martial Arts
                </p>
                <p className="text-center md:text-3xl text-white mb-2">
                ● Atheletics, Sports Photography
                </p>
              </Section>

              <Section>
                <div className="flex justify-center flex-wrap gap-8 mt-14">
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/1.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/2.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/3.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/4.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />

                  <Image
                    className="object-cover"
                    src={"/AzadiImages/5.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/6.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/7.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/8.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/9.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/10.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/11.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/12.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/13.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/14.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/15.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/16.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/17.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/18.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/19.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                  <Image
                    className="object-cover"
                    src={"/AzadiImages/20.png"}
                    alt="image"
                    width={300}
                    height={300}
                  />
                </div>
              </Section>
              {/* <div className="flex justify-center w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
                <Link href={"https://www.maximevents.asia/"} target="_blank">
                  <Section>
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
                  </Section>
                </Link>
              </div> */}
              <Section>
              <h2 className="text-4xl text-white text-center pt-10 pb-2 font-semibold">
                      Patners
                    </h2>
              </Section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white   ">
               
                  <Section>

                    <Image
                      className="object-cover bg-blue-400 px-6 py-6  w-96 h-64"
                      src={"/patner6.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">Prime Steels Re-Rolling Mills</h1>
                  </Section>
                <Link href={"https://shopecs.com"} target="_blank">
                  <Section>

                    <Image
                      className="object-cover bg-red-700 px-6 py-6 "
                      src={"/patner4.jpg"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">ECS</h1>
                  </Section>
                </Link>
                <Link href={"https://www.facebook.com/primebanaspati/"} target="_blank">
                  <Section>

                    <Image
                      className="object-cover bg-green-900 px-6 py-6 w-96 h-64"
                      src={"/patner5.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">Prime Banaspati</h1>
                  </Section>
                </Link>
              </div>
              <Section>
                            <h2 className="text-4xl text-white text-center pt-10 pb-2 font-semibold">
                      Coverage Patners
                    </h2>
              </Section>
              <div className="md:flex justify-between w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white   ">
                <Link href={"https://sama.pk/"} target="_blank">
                  <Section>

                    <Image
                      className="object-cover bg-blue-950 px-6 py-6  w-96 h-64"
                      src={"/covpatner1.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">Sama Newspaper</h1>
                  </Section>

                </Link>
                <Link href={"https://www.city42.tv/"} target="_blank">
                  <Section>

                    <Image
                      className="object-cover bg-blue-950 px-6 py-6 w-96 h-64"
                      src={"/covpatner2.png"}
                      alt="image3"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-2xl text-center py-4">City 42</h1>
                  </Section>
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
