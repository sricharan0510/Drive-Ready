import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";
import SlideOne from '../../assets/Slide-1.jpeg';
import SlideTwo from '../../assets/Slide-2.jpg';
import SlideThree from '../../assets/Slide-3.jpg';
import SlideFour from '../../assets/Slide-4.jpeg'
import SlideFive from '../../assets/Slide-5.jpg'

function Home() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div> <img src={SlideOne} /> </div>
        <div> <img src={SlideTwo} /> </div>
        <div> <img src={SlideThree} /> </div>
        <div> <img src={SlideFive} /> </div>
        <div> <img src={SlideFour} /> </div>
      </Slider>
    </div>
  );
}

export default Home;

