import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "../../assets/data/hero-slider";
import pic1 from "../../assets/img/1.jpg";
import pic2 from "../../assets/img/2.jpg";
import pic3 from "../../assets/img/3.png";
import pic4 from "../../assets/img/4.jpg";
import pic5 from "../../assets/img/5.png";
import pic6 from "../../assets/img/6.jpg";
import pic7 from "../../assets/img/7.jpg";
import pic8 from "../../assets/img/8.jpg";

import "./HeroSlider.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HeroSlider = (props) => {
  const [items, setItems] = useState([
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
  ]);

  return (
    <div className="App">
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item, index) => (
            <Item key={index}>
              <img src={item} alt="" height="100%" />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default HeroSlider;
