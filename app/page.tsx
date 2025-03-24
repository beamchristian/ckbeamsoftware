import { Hind } from "next/font/google";
import HomeComponent from "./components/HomeComponent/HomeComponent";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function Home() {
  return (
    <main className='min-h-screen relative'>
      <HomeComponent />
      <div
        id='portfolio'
        className='mt-0 pt-5 -mb-40'
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className={`container m-auto`}>
          <p
            style={{
              transform: "translate(0px, -20px)",
            }}
            className='text-[300px] text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden'
          >
            portfolio
          </p>
          <div
            style={{
              transform: "translate(0px, -250px)",
            }}
          >
            <p
              className={`text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl`}
            >
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 text-[16px]
                           text-[#47626D] leading-8 mt-5 ${hind.className}`}
            >
              Explore my latest full-stack web development projects, where I
              leverage cutting-edge technologies like Next.js and TypeScript to
              build seamless user experiences. Staying ahead in this dynamic
              field is a priority, so I'm constantly exploring new frameworks,
              tools, and best practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
