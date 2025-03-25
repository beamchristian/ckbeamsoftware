import React from "react";

import { SliderItem } from "@/Types/Types";

interface SliderCardProps {
  item: SliderItem;
  index: number;
}

function SliderCard({ item, index }: SliderCardProps): React.JSX.Element {
  return (
    <React.Fragment>
      <div
        className={`h-[200px] lg:h-[450px] md:h-[400px] sm:-[200px] lg:w-[650px]
                     md:w-[450px] sm:w-[300px] w-[300px] relative m-auto`}
      >
        <div className='h-full w-full group cursor-all-scroll z-50 relative'>
          <img
            src={item.images[0]}
            alt='item thumbnail'
            className='w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-100 rounded-lg'
          />
        </div>
        <div
          className='absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full'
          style={{ boxShadow: "#48AFDE -10px 10px 20px 10px" }}
        >
          <div className='relative h-[200px] lg:h-[350px] md:h-[300px] w-[100%]'>
            <p>{item.title}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderCard;
