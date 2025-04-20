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
        className={`h-[280px] lg:h-[450px] md:h-[400px] sm:-[200px] lg:w-[650px]
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
            className={`absolute bottom-[200px]
                        sm:bottom-[270px]
                        left-6 rounded-lg transition
                        lg:opacity-0 md:opacity-0
                        duration-300 group-hover:opacity-100
                        bg-dark-text-2 cursor-pointer
                        flex items-center justify-center
                        shadow-accent-color hover:shadow-xl
                        hover:bg-dark-text-2 w-10 h-10
                        md:w-12 md:h-12 md:bottom-32
                        lg:w-20 lg:h-20 lg:bottom-44
                        shadow-[-10px_10px_20px_10px_theme(colors.brand.light)]
                        `}
          >
            <EyeSvg />
          </div>
        </div>
        <div className='shadow-[0px_0px_40px_0px_theme(colors.brand.light)] absolute top-14 sm:left-12 rounded-lg bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full'>
          <div className='relative h-[200px] lg:h-[350px] md:h-[300px] w-[100%]'>
            <p className='absolute bottom-1 ml-4 text-lg front-[300]'>
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
