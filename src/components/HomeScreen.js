import Image from "next/image";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="lg:flex items-center ">
      <div className="lg:mt-20 lg:ml-32 ml-12 mt-12">
        <div className="flex  items-center rounded-3xl bg-lime-50 text-black w-52 h-12 ">
          <h1 className="lg:ml-4 ml-2 text-pink-600 ">
            {" "}
            Explore the World
          </h1>
          <Image src="/Vector (1).png" width={20} height={20} className="ml-4" />
        </div>
        <div className="mt-10 ">
          <h1 className="lg:text-6xl text-4xl font-bold">
            {" "}
            Travel{" "}
            <span className="text-pink-600 ">
              top
              <br /> destination
            </span>
            <br /> of the world
          </h1>
        </div>
        <div className="mt-8">
          <h1>
            We always make our customer happy by providing
            <br />
            as many choices as possible{" "}
          </h1>
        </div>

        <div className="flex items-center lg:mt-20 mt-8">
          <button className="rounded-3xl bg-violet-700 text-white px-4 py-2 text-sm">
            Get Started
          </button>
          <button className="ml-10 flex items-center space-x-2">
            <Image src="/Vector (2).png" width={20} height={20} />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      <div className="relative lg:ml-40 lg:mt-0 mt-8 ml-2 lg:mb-32">
        <div>
          <Image src="/layer.png" height={287} width={772} />
        </div>
        <div className="absolute lg:top-24 lg:left-40 top-20   ">
          <Image src="/Frame 14.png" height={200} width={200} />
        </div>
       <div className="absolute lg:top-48 lg:left-96 top-48 left-52">
          <Image src="/Rectangle 3.png" height={200} width={200} />
        </div> 
        <div className="absolute top-96 left-[500px]">
          <Image src="/Frame 18.png" height={200} width={200} />
          </div>
      </div>
    </div>
  );
};

export default HomeScreen;
