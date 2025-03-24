import React from "react";
import Slider from "./SliderCard";
import { DataArray } from "@/app/data";

function SliderCard({ item, index }) {
  return (
    <React.Fragment>
      <div
        className={`h-[200px] lg:h-[450px] md:h-[400px] sm:-[200px] lg:w-[650px]
                     md:w-[450px] sm:w-[300px] w-[300px] relative m-auto`}
      >
        <div className='h-full w-full group cursor-all-scroll z-50 relative'>
          <img src=''></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderCard;
