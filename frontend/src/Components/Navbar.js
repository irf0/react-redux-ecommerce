import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../state/index";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const handleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <div>
      <div className="w-full h-16 bg-amber-700 flex items-center justify-around">
        <h1
          className="font-extrabold p-1 text-white text-3xl sm:text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          tee-cart
        </h1>
        <div className="items-center flex relative justify-end">
          <input
            type="text"
            placeholder="Search"
            className={`${
              isSearchBarOpen
                ? "rounded-2xl p-1 w-96 sm:w-40 sm:absolute outline-none"
                : "hidden"
            }`}
          />
          <AiOutlineSearch
            className={`${
              isSearchBarOpen
                ? "h-6 w-6 absolute mr-2 cursor-pointer"
                : "hidden"
            }`}
          />
        </div>
        <div className="flex gap-8 text-white ">
          <AiOutlineSearch
            className="text-2xl cursor-pointer"
            onClick={handleSearchBar}
          />
          <BsFillPersonFill className="text-2xl cursor-pointer" />
          <div className="flex">
            <AiOutlineShopping
              className="text-3xl cursor-pointer absolute"
              onClick={() => dispatch(setIsCartOpen({}))}
            />
            <div className="w-5 h-5 rounded-full bg-red-600 flex justify-center items-center z-10 -mt-3 ml-1 text-white">
              {cart.length}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center bg-amber-700">
        <Link to={"/"}>
          <h3 className="font-bold text-white mb-1 CURSOR">HOME</h3>
        </Link>
        <Link to={"/catalog"}>
          <h3 className="font-bold text-white mb-1 CURSOR">CATALOG</h3>
        </Link>
        <Link to={"/about"}>
          <h3 className="font-bold text-white mb-1 CURSOR">ABOUT US</h3>
        </Link>
        <Link to={"/contact"}>
          <h3 className="font-bold text-white mb-1 CURSOR">CONTACT US</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
