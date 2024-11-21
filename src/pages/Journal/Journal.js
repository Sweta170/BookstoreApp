import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
          Your Companion for Creativity and Reflection : </span>{" "}
         
          Discover a collection of beautifully crafted journals designed to inspire your thoughts, ideas, and plans. Whether you’re a writer, 
          student, or someone who loves to jot down daily reflections, we have the perfect journal for you.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>

        <p align="right"><h1 className="font-bold text-2xl text-black">Why Choose Our Journals?</h1>
          <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg"> </span>{" "}
         
          Variety of Styles: Explore journals for every need—daily planners, creative writing notebooks, gratitude journals, and more.
Premium Quality: Enjoy durable materials with smooth, high-quality paper that makes writing a pleasure.
Personalized Options: Choose journals that match your personality or gift them to a loved one.
Affordable Pricing: Premium designs at prices you’ll love.
        </h1>
        </p>
      </div>
    </div>
  );
};

export default Journal;
