import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
       <center><h1 className="font-semibold text-2xl py-8">Welcome to Bookly bookStore </h1>
         <h1 className="max-w-[600px] text-base  text-center text-lightText mb-2">
          <span className="text-primeColor content-center font-semibold text-lg">Bookly</span>{" "}
          your one-stop destination for discovering and purchasing books online. 
          Our mission is to make reading accessible, enjoyable, and effortless for everyone.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
        <h1 className="font-semibold text-2xl py-8">Who we Are?</h1>
        <h1 className="max-w-[600px] text-base  text-center text-lightText mb-2">
          <span className="text-primeColor content-center font-semibold text-lg">we're</span>{" "}
           passionate book lovers dedicated to connecting readers with stories that inspire, educate, and entertain. Whether
           you’re a casual reader, a student, or a literary enthusiast, our platform is designed to cater to your needs.
        </h1>

        <h1 className="font-semibold text-2xl py-8">What We Offer</h1>
        <h1 className="max-w-[600px] text-base  text-center text-lightText mb-2">
          <span className="text-primeColor content-center font-semibold text-lg"></span>{" "}
          <ul>
            <li><span className="text-black font-bold">Vast Collection:</span> Explore thousands of books across genres—fiction, non-fiction, self-help, academic, and more.</li>

      <li><span className="text-black font-bold">Personalized Experience:</span> Get tailored recommendations based on your preferences and reading history.</li>
      <li><span className="text-black font-bold">Seamless Shopping:</span> Enjoy a user-friendly interface, secure checkout, and reliable delivery services.</li>
      <li><span className="text-black font-bold"> Community of Readers:</span> Share reviews, join discussions, and connect with like-minded book lovers.</li>
      </ul>
        </h1>

        <h1 className="font-semibold text-2xl py-8">Our Vision</h1>
        <h1 className="max-w-[600px] text-base  text-center text-lightText mb-2">
          <span className="text-primeColor content-center font-semibold text-lg">We aim</span>{" "}
          to inspire a love for reading by bringing books closer to readers everywhere. At Bookly bookstore,
          we believe books have the power to change lives, spark imagination, and foster knowledge.
        </h1>
        </center>
      </div>
    </div>
  );
};

export default About;
