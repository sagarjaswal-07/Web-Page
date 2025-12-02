import React from "react";
import icon from "../assets/circle.svg";
const Navbar = () => {
  return (
    <>
      <div className="">
        <ul className="row flex items-center justify-between pt-[21px] text-[14px] mb-[21px]">
          <div className="nav flex gap-[50px] pl-[150px] ">
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Resources</li>
          </div>
          <div className="logo">
            <li>
              <img className="inline-flex font-bold" src={icon} alt="logo" />
            </li>
          </div>
          <div className="nav3 items-center flex gap-[50px] pr-[150px]">
            <li>Company</li>
            <li>Contact</li>
            <li>
              <button className="w-[138px] h-[38px] border border-[#0CBBC7] text-[#0CBBC7]">
                Login
              </button>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
