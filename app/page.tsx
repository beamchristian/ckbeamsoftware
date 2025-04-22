import { Hind } from "next/font/google";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";

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
        className='bg-gradient-to-t from-primary to-light-bg w-full mt-0 pt-5'
      >
        <div className={`container m-auto`}>
          <p className='text-[2rem] lg:text-[10rem] mt-8 md:text-[8rem] text-off-white md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden'>
            Portfolio
          </p>
          <div>
            <p
              className={`text-primary md:pl-[80px] px-5 font-extrabold text-3xl md:text-5xl`}
            >
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 text-[1.2rem]
                           text-dark-text-2 mb-8 leading-8 mt-5 ${hind.className}`}
            >
              Explore my latest full-stack web development projects, where I
              leverage cutting-edge technologies like Next.js and TypeScript to
              build seamless user experiences. Staying ahead in this dynamic
              field is a priority, so I&apos;m constantly exploring new
              frameworks, tools, and best practices.
            </p>
          </div>
          <div className='bg-light-bg slick-slider'>
            <MySlider />
          </div>
        </div>
      </div>
      <AboutMe />
      {/* <Testimonial /> */}
      <CallToAction />
    </main>
  );
}
