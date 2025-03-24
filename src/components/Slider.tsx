"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/17499404/pexels-photo-17499404/free-photo-of-close-up-of-a-bunch-of-blue-carnations-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "WELCOME TO GREENSHOP",
    title: "LET'S MAKE A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/11522895/pexels-photo-11522895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "WELCOME TO GREENSHOP",
    title: "LET'S LIVE IN A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/30599027/pexels-photo-30599027/free-photo-of-vibrant-yellow-tulip-bouquet-in-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    header: "WELCOME TO GREENSHOP",
    title: "LET'S OBSERVE A BETTER PLANET",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
      style={{transform: `translateX(-${current * 100}vw)`}}>
        {slides.map((slide) => (
          <div
            className="bg-green-50 w-screen h-full flex flex-col gap-16 xl:flex-row"
            key={slide.id}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12">
              <h6 className="">{slide.header}</h6>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <p className="text-xl">{slide.description}</p>
            </div>
            {/* image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-1 h-1 rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
