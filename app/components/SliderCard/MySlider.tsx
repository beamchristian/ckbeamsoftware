import React from "react";
import Slider from "./SliderCard";
import { DataArray } from "@/app/data";

function MySlider() {
  return (
    <div>
      {DataArray.map((item, index) => (
        <div className='my-slider' key={index}>
          <Slider item={item} index={index} key={index} />
        </div>
      ))}
    </div>
  );
}

export default MySlider;
