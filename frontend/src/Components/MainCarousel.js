import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const images = [
  {
    src1: img1,
    altText: "First slide",
  },
  {
    src2: img2,
    altText: "Second slide",
  },
  {
    src3: img3,
    altText: "Third slide",
  },
];

const MainCarousel = () => {
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className=" mx-0 sm:h-64 flex cursor-pointer">
            <img src={img1} alt="1" className="h-600 sm:h-64 w-full" />
          </div>
          <div className="  mx-0 sm:h-64 flex cursor-pointer">
            <img src={img2} alt="2" className="h-600 sm:h-64 w-full" />
          </div>
          <div className=" mx-0 sm:h-64 flex cursor-pointe">
            <img src={img3} alt="3" className="h-600 sm:h-64 w-full" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainCarousel;
