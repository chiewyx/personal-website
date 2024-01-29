import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useState } from "react";
import reviewlah from "../2.png";
import upcycle from "../Up.png";
import hawkertown from "../logo.jpg";
import code from "../code.png";
import alex from "../alex.png";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const links = ["/hawkertown", "/reviewlah", "/upcycle", "/alex"];

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "HawkerTown",
      text: "webapp that offers a one-stop solution for hawkers and suppliers to connect",
      image: hawkertown,
      page: "/hawkertown",
    },
    {
      title: "ReviewLah!",
      text: "webapp for users to review the accessibility of a location",
      image: reviewlah,
      page: "/reviewlah",
    },
    {
      title: "Upcycle",
      text: "Upcycle - a desktop app dedicated to managing rental businesses.",
      image: upcycle,
      page: "/upcycle",
    },
    {
      title: "Alex",
      text: "a search and rescue robotic vehicle ‘Alex’ to map out the location it is placed in.",
      image: alex,
      page: "/alex",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"500px"}
      width={"70%"}
      justify={"center"}
      overflow={"hidden"}
      margin="auto"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -110%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="20px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -110%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="20px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => {
          console.log(card.page);
          return (
            <Box
              borderRadius={30}
              key={index}
              height={"md"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
              as={ReactRouterLink}
              to={card.page}
            >
              {/* This is the block you need to change, to customize the caption */}
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
