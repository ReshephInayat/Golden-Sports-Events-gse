import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamMembers from "./TeamMembers";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TeamSlider() {
  return (
    <Carousel
      arrows={true}
      additionalTransfrom={0}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      
    >
      <TeamMembers
        image="/images/Ceo.png"
        name="Mudassar Iqbal Butt"
        role="CEO"
        
      />
      <TeamMembers
        image="/images/logo.png"
        name="Asmaa Usman"
        role="Director operational"
      />
      <TeamMembers
        image="/images/logo.png"
        name="Umar Jan"
        role="Director Media & news"
      />
      <TeamMembers
        image="/images/logo.png"
        name="Kamil Saeed"
        role="Director international tours"
      />
    </Carousel>
  );
}
