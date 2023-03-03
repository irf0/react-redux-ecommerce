import React from "react";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
  AiTwotoneMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex w-full bg-amber-700 h-35vh mb-0.5 justify-around mt-4">
      <div className="w-1/4 sm:w-1/3">
        <h1 className="font-bold text-3xl sm:text-2xl text-white ml-4 mt-5">
          tee-cart
        </h1>
        <p className="ml-4 text-gray-200 sm:text-sm mr-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col justify-center w-1/4 sm:w-1/3 sm:text-sm">
        <h2 className="font-bold text-white text-lg sm:text-sm">ABOUT US</h2>
        <h3 className="mb-1 font-semibold text-white text-md">Careers</h3>
        <h3 className="mb-1 font-semibold text-white text-md">Our Stores</h3>
        <h3 className="mb-1 font-semibold text-white text-md">
          Terms of Service
        </h3>
        <h3 className="mb-1 font-semibold text-white text-md">
          Privacy Policy
        </h3>
      </div>
      <div className="flex flex-col justify-center mt-4 sm:-mt-7 w-1/4 sm:w-1/3 sm:text-xs">
        <h2 className="font-bold text-white text-lg sm:text-sm">
          CUSTOMER CARE
        </h2>
        <h3 className="mb-1 font-semibold text-white text-md">Help Center</h3>
        <h3 className="mb-1 font-semibold text-white text-md">Track Order</h3>
        <h3 className="mb-1 font-semibold text-white text-md">
          Returns & Refunds
        </h3>
        <h3 className="mb-1 font-semibold text-white text-md">Bulk Purchase</h3>
      </div>
      <div className="flex flex-col justify-center mt-4 sm:-mt-9 sm:ml-1 w-1/4 sm:w-1/3 sm:text-xs">
        <h2 className="font-bold text-white text-lg sm:text-sm">CONTACT US</h2>
        <p className="mb-1 font-semibold text-white text-md ">
          Sector 2 Industrial area New Delhi, 000140
        </p>
        <h3 className="mb-1 mx-0.5 font-semibold text-white text-md flex items-center">
          <AiOutlineMail className="sm:hidden" /> Email : example@email.com
        </h3>
        <h3 className="mb-1 mx-0.5 font-semibold text-white text-md flex items-center">
          <AiFillPhone className="sm:hidden" /> Phone : (222)-333-4444
        </h3>
      </div>
      <div className="absolute mt-60">
        <p className="text-white sm:text-black">
          Created with <span className="text-red-600">❤</span> by dev_Irfan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
