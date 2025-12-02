import React from "react";
import arrow from "../assets/arrow.svg";
import hero from "../assets/Mask.png";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="row text-center h-[550px] mt-[20] items-center bg-cyan-50">
          <p className="font-bold font-sans text-[44px]  pt-10">
            A powerful online engagement tool
            <br />
            that’s intuitive and simple to use.
          </p>
          <p className="text-[14px] text-[#878787] pt-4">
            With stellar one-click reports and unmatched support, see how
            <br />
            Circle will make a difference in your business.
          </p>
          <div className="mt-8">
            <button className="inline-flex w-[188px] gap-2.5  text-white h-[12] py-3.5 px-5 bg-[#0CBBC7]">
              Get Started Free <img src={arrow} alt="arrow" />
            </button>
          </div>
          <div className="image mt-14 flex justify-center items-center">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
