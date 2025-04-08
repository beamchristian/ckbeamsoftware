"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { DataArray } from "@/app/data";
import { MySliderSettings } from "@/utils/variables";

function MySlider() {
  return (
    <Slider {...MySliderSettings}>
      {DataArray.map((item, index) => (
        <div className='my-slider' key={index}>
          <SliderCard item={item} index={index} key={index} />
        </div>
      ))}
    </Slider>
  );
}

export default MySlider;
