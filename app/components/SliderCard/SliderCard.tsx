import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { SliderItem } from "@/Types/Types";
import EyeSvg from "./Svg";

interface SliderCardProps {
  item: SliderItem;
  index: number;
}

function SliderCard({ item, index }: SliderCardProps): React.JSX.Element {
  const router = useRouter();
  return (
    <>
      <div
        className={`h-[200px] lg:h-[450px] md:h-[400px] sm:-[200px] lg:w-[650px]
                     md:w-[450px] sm:w-[300px] w-[300px] relative m-auto`}
      >
        <div className='h-full w-full group cursor-all-scroll z-50 relative'>
          <Image
            src={item.images[0]}
            alt='item thumbnail'
            className='w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-100 rounded-lg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "80%" }}
          />
          <div
            onClick={() => router.push(`/portfoliodetails/${index}`)}
            className={`absolute bottom-[270px]
                        sm:bottom-[270px]
                        left-6 rounded-lg transition
                        duration-300 opacity-0
                        group-hover:opacity-100
                        bg-[#47626D] cursor-pointer
                        flex items-center justify-center
                        shadow-accent-color hover:shadow-xl
                        hover:bg-[#47626D] w-10 h-10
                        md:w-12 md:h-12 md:bottom-32
                        lg:w-20 lg:h-20 lg:bottom-44
                        `}
            style={{ boxShadow: "#48AFDE -10px 10px 20px 10px" }}
          >
            <EyeSvg />
          </div>
        </div>
        <div
          className='absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full'
          style={{ boxShadow: "#48AFDE -10px 10px 20px 10px" }}
        >
          <div className='relative h-[200px] lg:h-[350px] md:h-[300px] w-[100%]'>
            <p className='absolute bottom-3 left-4 text-lg front-[300]'>
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
