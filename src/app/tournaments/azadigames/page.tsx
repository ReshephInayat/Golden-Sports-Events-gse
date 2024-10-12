"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Sections";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/image5.jpg",
];

const azadiImages = [
  "/AzadiImages/1.png",
  "/AzadiImages/2.png",
  "/AzadiImages/3.png",
  "/AzadiImages/4.png",
  "/AzadiImages/5.png",
  "/AzadiImages/6.png",
  "/AzadiImages/7.png",
  "/AzadiImages/8.png",
  "/AzadiImages/9.png",
  "/AzadiImages/10.png",
  "/AzadiImages/11.png",
  "/AzadiImages/12.png",
  "/AzadiImages/13.png",
  "/AzadiImages/14.png",
  "/AzadiImages/15.png",
  "/AzadiImages/16.png",
  "/AzadiImages/17.png",
  "/AzadiImages/18.png",
  "/AzadiImages/19.png",
  "/AzadiImages/20.png",
];

const partners = [
  { src: "/patner6.png", name: "Prime Steels Re-Rolling Mills" },
  { src: "/patner4.jpg", name: "ECS", link: "https://shopecs.com" },
  {
    src: "/patner5.png",
    name: "Prime Banaspati",
    link: "https://www.facebook.com/primebanaspati/",
  },
];

const coveragePartners = [
  { src: "/covpatner1.png", name: "Sama Newspaper", link: "https://sama.pk/" },
  { src: "/covpatner2.png", name: "City 42", link: "https://www.city42.tv/" },
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

                <h1 className="text-4xl text-white text-center font-semibold mt-8 mb-4 ">
                  Azadi Games
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

              {/* Render Azadi Images using map */}
              <Section>
                <div className="flex justify-center flex-wrap gap-8 mt-14">
                  {azadiImages.map((src, i) => (
                    <Image
                      key={i}
                      className="object-cover"
                      src={src}
                      alt={`Azadi Game Image ${i + 1}`}
                      width={300}
                      height={300}
                    />
                  ))}
                </div>
              </Section>

              <Section>
                <h2 className="text-4xl text-white text-center pt-10 pb-2 font-semibold">
                  Partners
                </h2>
              </Section>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white">
                {partners.map((partner, i) => (
                  <Link
                    key={i}
                    href={partner.link ?? "#"}
                    target={partner.link ? "_blank" : "_self"}
                  >
                    <Section>
                      <Image
                        className="object-cover bg-blue-400 px-6 py-6  w-96 h-64"
                        src={partner.src}
                        alt={partner.name}
                        width={400}
                        height={400}
                      />
                      <h1 className="text-2xl text-center py-4">
                        {partner.name}
                      </h1>
                    </Section>
                  </Link>
                ))}
              </div>

              <Section>
                <h2 className="text-4xl text-white text-center pt-10 pb-2 font-semibold">
                  Coverage Partners
                </h2>
              </Section>

              <div className="md:flex justify-between w-[80%] mx-auto items-center gap-[3rem] mt-[2rem] text-white">
                {coveragePartners.map((partner, i) => (
                  <Link key={i} href={partner.link} target="_blank">
                    <Section>
                      <Image
                        className="object-cover bg-blue-950 px-6 py-6  w-96 h-64"
                        src={partner.src}
                        alt={partner.name}
                        width={400}
                        height={400}
                      />
                      <h1 className="text-2xl text-center py-4">
                        {partner.name}
                      </h1>
                    </Section>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    </>
  );
};

export default Slider;