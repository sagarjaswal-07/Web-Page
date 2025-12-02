import React from "react";
import HeroImage from "../assets/Mask.png";
import Group from "../assets/Group2.png";
import Group8 from "../assets/Group8.png";
import capegimi from "../assets/img14.png";
import yamha from "../assets/img16.png";
import biocon from "../assets/img15.png";
import dell from "../assets/img17.png";
import ckbrla from "../assets/img18.png";
import frame57 from "../assets/frame57.png";
import frame59 from "../assets/frame59.png";
import frame58 from "../assets/frame58.png";
import image1 from "../assets/image1.png";

import shell from "../assets/img19.png";

const Landing = () => {
  return (
    <>
      <div className="text-center p-5 bg-cyan-50 h-98">
        <p className="font-bold text-4xl">
          A powerful online engagement tool
          <br></br> that’s intuitive and simple to use.
        </p>
        <p className="text-sm">
          With stellar one-click reports and unmatched support, see how
          <br></br>Circle will make a difference in your business.
        </p>
        <br></br>
        <button className=" text-white px-5 h-12 w-[188px] bg-[#0cbbc7]">
          Get Started Free
        </button>
        <div className="flex justify-center w-100 mt-[86px]">
          <img src={HeroImage} alt="hero" />
        </div>

        <div>
          <p className="text-xs font-bold text-cyan-600">OUR CUSTOMERS</p>
          <p className="text-xl">
            Trusted by <span className="font-bold"> 100,000+ customers </span>in
            90+ countries
          </p>
          <div className="container flex  justify-between p-5">
            <img src={capegimi} alt="" />
            <img src={yamha} alt="" />
            <img src={biocon} alt="" />
            <img src={dell} alt="" />
            <img src={ckbrla} alt="" />
            <img src={shell} alt="" />
          </div>
          <div className="flex gap-4 justify-center">
            <img src={frame57} alt="" />
            <img src={frame58} alt="" />
            <img src={frame59} alt="" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <hr></hr>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container p-5 flex justify-between">
          <div className="text text-start p-5 m-5">
            <p className="text-xs font-bold  text-cyan-600">OUR PROMISE</p>
            <h2>
              Tool <span className="font-bold">built for people.</span>
            </h2>
            <br></br>
            <p>
              Whether you want to edit your Google Docs,
              <br /> resolve Jira issues, or collaborate over Zoom.
            </p>
            <br />
            <p>
              Circle has 100+ integrations with tools you <br /> already use and
              love.
            </p>
            <button
              className=" text-white px-3 mt-4"
              style={{ backgroundColor: "#0cbbc7" }}
            >
              <p className=" font-bold pt-2 " style={{ fontSize: "16px" }}>
                Get Started Free{" "}
              </p>
            </button>
          </div>
          <div className="img">
            <img src={image1} alt="" />
          </div>
        </div>
        <br></br>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <div className="award">
          <div>
            <p className="text-xs font-bold  text-[#0CBBC7]">AWARDS</p>
            <p
              className=""
              style={{ fontFamily: "sans-serif", fontSize: "28px" }}
            >
              An <span className="font-bold"> award winning</span> platform,{" "}
              <span className="font-bold">loved by customers.</span>
            </p>
          </div>
          <div className="container flex">
            <div className="first" style={{ height: "259px", width: "261px" }}>
              <img src={HeroImage}></img>
            </div>
            <div className="second">shsh</div>
            <div className="third">shsh</div>
            <div className="forth">shsh</div>
            <div className="fifth">shsh</div>
            <div className="sixth">shsh</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
