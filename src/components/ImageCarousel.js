import React, { useState } from "react";
import Slider from "react-slick";
import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/33.png";
import image4 from "../assets/44.png";
import image5 from "../assets/55.png";

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the current active slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setActiveSlide(next), // Update active slide index before change
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "4.375rem",
            height: "0.625rem",
            margin: "-30px",
            borderRadius: "0.3125rem",
            border: "1px solid white", // Change color based on active slide
            backgroundColor: i === activeSlide ? "#fff" : "transparent", // Active slide background color
            transition: "background-color 0.3s ease", // Smooth transition
          }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          gap: "3.9rem" // Space between the dots
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="slide1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={image2} alt="slide2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={image3} alt="slide3" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={image4} alt="slide4" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={image5} alt="slide5" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
