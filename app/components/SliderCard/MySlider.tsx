import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { DataArray } from "@/app/data";

function MySlider() {
  return (
    <div>
      {DataArray.map((item, index) => (
        <div className='my-slider' key={index}>
          <SliderCard item={item} index={index} key={index} />
        </div>
      ))}
    </div>
  );
}

export default MySlider;
