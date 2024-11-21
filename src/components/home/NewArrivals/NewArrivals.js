import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
  newArrSix,
  newArrSev,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="The Psychology of Money"
            price="250.00"
            color="Mixed"
            badge={true}
            des="That is precisely what Morgan Housel explores in his book The Psychology of Money. He establishes that how you handle your finances is linked to your psychological quirks and experiences."
            />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="It ends with us"
            price="800.00"
            color="Colleen Hoovelin"
            badge={true}
            des="This series follows Lily Bloom as she grapples with the realization that her too-good-to-be-true relationship with Ryle Kinkaid may be just that. When Lily's first love, Atlas Corrigan, comes back into her life, Atlas reminds Lily of how she deserves to be treated."/>
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Twisted LIES"
            price="60.00"
            author="Ana Huang"
            badge={false}
            des="Charming, deadly and smart enough to hide it, Christian Harper is a monster dressed in the perfectly tailored suits of a gentleman."
              />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100006"
            img={newArrSix}
            productName="Funny toys for babies"
            price="100.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100007"
            img={newArrSev}
            productName="Funny toys for babies"
            price="600.00"
            color="Mixed"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
