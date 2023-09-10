import React from "react";
import vector from "../assets/Vector 1.png";
import truck from "../assets/truck.svg";
function Hero() {
  return (
    <section className="h-screen flex lg:flex-row flex-col-reverse w-full items-center justify-center">
      <aside className="lg:w-1/2  h-full w-full flex flex-col justify-normal gap-36 items-center lg:px-24  py-6">
        <header className="w-full lg:flex mx-6 hidden">
          <img src={truck} alt="logo" className="w-24 h-24  mx-6"></img>
        </header>
        <article className="flex flex-col gap-10 w-full justify-between lg:items-start items-center text-[#0E2368] ">
          <h1 className="font-source lg:text-6xl text-5xl font-bold lg:w-2/3  mx-6 text-center lg:text-left ">
            Discover the
            <span className="lg:text-6xl text-5xl text-[#E23744] font-source font-bold">
              {" "}
              Best
            </span>{" "}
            Food and Drinks
          </h1>
          <p className="lg:w-1/2 w-2/3  text-[#444957] mx-6 font-open font-normal text-sm lg:text-base lg:text-left text-center">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="bg-[#E23744] text-base mx-6 font-open font-bold px-5 py-3 rounded-3xl text-white">Explore Now!</button>
        </article>
        
      </aside>
      <aside className="h-full hero-right lg:w-1/2 bg-white w-full  flex   items-start justify-end ">
      
      <img src={vector}  alt="hero-image" className="w-full h-full"></img> 
        <button className="text-[#FFFFFF] font-source lg:text-base text-xs absolute font-semibold border-[1px] bg-[rgba(255, 255, 255, 0.00)]  border-white rounded-3xl px-4 py-2 z-40 lg:right-12 right-4 lg:top-10 top-3 ">
          Get In Touch
        </button>
      </aside>
    </section>
  );
}

export default Hero;
