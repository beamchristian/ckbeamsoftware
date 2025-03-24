import React from "react";
import Slider from "./SliderCard";
import { DataArray } from "@/app/data";

function MySlider() {
  return (
    <div>
      {DataArray.map((item, index) => (
        <div className='my-slider'>
          <Slider item={item} index={index} />
        </div>
      ))}
    </div>
  );
}

export default MySlider;
