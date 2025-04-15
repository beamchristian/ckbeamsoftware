"use client";
import { PortfolioDataType } from "@/Types/Types";
import { Hind } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Previous from "./previous-svg";
import Next from "./next-svg";
// Import Link for client-side navigation
import Link from "next/link";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type PortfolioDetailsDesignProps = {
  data: PortfolioDataType;
  id: string; // Keep as string, handle conversion inside
  DataArray: PortfolioDataType[];
};

// Rename the function to start with an uppercase letter
function PortfolioDetailsDesign({
  id,
  data,
  DataArray,
}: PortfolioDetailsDesignProps) {
  const router = useRouter(); // Hook called inside a valid component now
  const [nextId, setNextId] = useState(0); // Renamed state variable for clarity
  const [prevId, setPrevId] = useState(0); // Renamed state variable for clarity

  useEffect(() => {
    // Use parseInt for converting string ID from URL param/prop
    const currentIdNum = parseInt(id, 10);
    const arrayLength = DataArray.length;

    // Basic validation in case parseInt fails or id is somehow invalid
    if (isNaN(currentIdNum) || arrayLength === 0) {
      // Handle error case appropriately, maybe redirect or show error message
      console.error("Invalid ID or empty data array");
      return;
    }

    // Set next index/ID
    setNextId((currentIdNum + 1) % arrayLength); // Use modulo for clean wrapping

    // Set prev index/ID
    setPrevId((currentIdNum - 1 + arrayLength) % arrayLength); // Use modulo for clean wrapping (handles negative result)
  }, [id, DataArray.length]); // Dependencies are correct

  // No need for separate PushToNext/Prev functions when using <Link>

  // --- Component Return ---
  return (
    <>
      {/* Consider if this overlay is needed or if styling can be applied differently */}
      <div className='overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-gray-300'></div>

      {/* --- Header Image Section --- */}
      <div className='relative h-[400px] lg:mt-24 sm:mt-0'>
        {" "}
        {/* Added height to parent for layout="fill" */}
        {data?.images?.[0] && ( // Check if image exists
          <Image
            src={data.images[0]}
            alt={`${data?.title || "Portfolio"} banner`} // More descriptive alt text
            fill // Use fill layout to cover the parent container
            style={{ objectFit: "cover" }} // Control how the image covers the area
            priority // Consider adding priority if this is the LCP image
            // Removed width/height/sizes as 'fill' handles this
          />
        )}
      </div>

      {/* --- Title Section --- */}
      <div
        className={`absolute z-30 top-[42px]
                     sm:top-[200px] sm:left-[65px]
                     sm:w-3/4 sm:text-left
                     justify-center items-center w-full
                     px-10 xl:w-1/2 sm:px-0
                   `}
      >
        <div className={`container m-auto`}>
          <div className={`max-w-[650px] w-[100%] m-auto`}>
            <p
              className={`opacity-3 sm:text-left text-center font-sans text-dark-text mb-3`}
            >
              Project Sample
            </p>
            <h1 className='opacity-3 text-dark-text sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4x md:text-4xl lg:text-4xl xl:text-4xl'>
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div
        className='grid grid-cols-12 relative space-x-0 lg:space-x-8'
        style={{
          background:
            "linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%)",
        }}
      >
        {/* Image Gallery */}
        <div className='col-span-12 lg:col-span-8 mb-20 lg:px-0 sm:px-0'>
          {data?.images?.map(
            (
              item,
              index // Use index for key if URLs aren't guaranteed unique AND list is static
            ) => (
              <div
                className='flex justify-center lg:justify-end items-center mt-20' // Added mt-20 here, removed from img
                // Use index as key only if image URLs might not be unique *and* the list order doesn't change drastically.
                // If URLs are unique, key={item} is better.
                key={index}
              >
                {/* Use next/image for optimized images */}
                <Image
                  src={item}
                  alt={`Portfolio image ${index + 1}`} // More specific alt text
                  height={600} // Provide approximate height/width for layout stability
                  width={800}
                  className='rounded-lg object-contain' // Use object-contain or object-cover as needed
                  style={{ maxWidth: "100%", height: "auto" }} // Ensure responsiveness
                />
              </div>
            )
          )}
        </div>

        {/* Sidebar Info */}
        <div className='col-span-12 lg:col-span-4 lg:px-0 sm:px-20'>
          <div className='mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14'>
            <h1 className='text-3xl mb-4 text-[#48AFDE]'>{data?.name}</h1>
            <p className='text-[14px] font-sans mb-4 text-dark-text'>
              {data?.des}
            </p>
            <p id='highlight' className='my-2 text-dark text-[20px] font-sans'>
              Project Descriptions
            </p>
            <p className='text-[14px] font-sans mb-4 text-dark-text'>
              {data?.des1}
            </p>
            {/* Tech Stack/Tags */}
            <div className='flex flex-wrap'>
              {/* Consider mapping these from data if they vary per project */}
              <span
                className={`mr-5 text-[14px] bg-[#63C5F1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]`}
              >
                UI/UX Design
              </span>
              <span
                className={`mr-5 text-[14px] bg-[#63C5F1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]`}
              >
                Next.js
              </span>
              <span
                className={`mr-5 text-[14px] bg-[#63C5F1] lg:bg-[#EEF7FB] px-2 py-1 rounded-xl font-sans mb-4 text-white lg:text-[#6A787D]`}
              >
                React.js
              </span>
              {/* ... other tags ... use <span> or <div> instead of <h1> for tags */}
            </div>
          </div>
        </div>
      </div>

      {/* --- Navigation Section --- */}
      <div className='relative flex bg-accent-color h-48 text-white'>
        {/* Previous Link */}
        <Link // Use Link component
          href={`/portfoliodetails/${prevId}`}
          className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[prevId]?.images?.[0]})` }}
          aria-label={`Previous project: ${DataArray[prevId]?.title || ""}`} // Accessibility
        >
          <div // Inner div for background overlay and hover effect
            className={`flex justify-center items-center group-hover:bg-dark-text
                        cursor-pointer transition-colors duration-300
                        bg-[#405B66] bg-opacity-90
                        w-full h-full`}
          >
            <Previous />
            Previous Project
          </div>
        </Link>

        {/* Next Link */}
        <Link // Use Link component
          href={`/portfoliodetails/${nextId}`}
          className={`group w-1/2 flex items-center justify-center bg-cover ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[nextId]?.images?.[0]})` }}
          aria-label={`Next project: ${DataArray[nextId]?.title || ""}`} // Accessibility
        >
          <div // Inner div for background overlay and hover effect
            className='flex justify-center items-center group-hover:bg-dark-text
                        cursor-pointer transition-colors duration-300
                        bg-[#405B66] bg-opacity-90
                        w-full h-full'
          >
            <Next />
            Next Project
          </div>
        </Link>
      </div>
    </>
  );
}

export default PortfolioDetailsDesign;
