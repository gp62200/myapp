import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative ">
      <div className=" mt-48 lg:ml-28 ml-4 ">
        <Image src="/Graphic_Elements.png" height={100} width={200} />
      </div>

      <div className=" bg-amber-200  absolute top-16 lg:left-40 left-10 rounded-2xl lg:w-auto w-80">
        <div className="mt-20 lg:ml-14 ml-12">
          <h1 className=" text-pink-600 tracking-tighter ">
          SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <h1 className="mt-8 font-semibold text-5xl">
            Prepare yourself & let's explore the
            <br /> beauty of the world
          </h1>
        </div>
        <div className="relative mt-16 lg:ml-14 ml-8 mb-20">
          <span class="absolute lg:inset-y-0 inset-y-5 lg:left-0 left-4 lg:flex items-center lg:pl-3 pl-0 mr-4">
            <Image src="/Vector (8).png " height={20} width={20} />
          </span>
          <input
            type="mail"
            placeholder="Your Email "
            className="rounded-2xl lg:px-32 py-4  pl-8 mx-2    "
          />

          <button className="bg-violet-600 rounded-xl text-white text-sm px-12 py-4 lg:ml-20 ml-8 lg:mt-0 mt-4" >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
