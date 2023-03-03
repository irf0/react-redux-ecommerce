import React from "react";
import CartMenu from "./CartMenu";
import Footer from "./Footer";
import MainCarousel from "./MainCarousel";
import Newsletter from "./Newsletter";
import ProductsList from "./ProductsList";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <ProductsList />
      <Newsletter />
      {/* <Search /> */}
    </div>
  );
};

export default Home;
