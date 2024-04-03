import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="lg:flex items-center mt-24 ">
      <div className="relative ">
        <div className="relative mt-12">
          <Image src="/Rectangle 7.png" height={300} width={705} />
        </div>

        <div className="absolute top-0 ml-[600px]">
            <Image src="/Ellipse 14.png" height={200} width={200}/>
        </div>
        <div className="absolute top-8 ml-28  ">
            <Image src="/Ellipse 15.png" height={35} width={35}/>
        </div>
        <div  className="absolute top-20 lg:ml-[500px] ml-56">
        <div className="lg:flex flex  items-center rounded-3xl bg-lime-50 text-black w-52 h-12 ">
          <h1 className="ml-4 text-pink-600 ">
            {" "}
            Explore the World20
          </h1>
          <Image src="/Vector (1).png" width={20} height={20} className="ml-4" />
        </div>
        </div>
        
        <div className="absolute top-28 ml-[650px] ">
            <Image src="/Ellipse 16.png" height={40} width={40}/>
        </div>
        <div className="absolute top-56 ml-[550px] ">
            <Image src="/Ellipse 17.png" height={16} width={16}/>
        </div>
        <div className="absolute top-96 ml-[632px] ">
            <Image src="/Ellipse 18.png" height={32} width={32}/>
        </div>
        <div className="absolute ml-24 top-0  left-0  ">
          <Image src="/My project 1.png" height={896} width={896} />
        </div>

        
      </div>
      <div >
        <div className="lg:ml-48 ml-12 mt-8">
            <h1 className="text-pink-500 uppercase">Travel Point</h1>
            <h1 className="font-bold text-3xl mt-8">We helping you find<br/> your dream location</h1>
            <h1 className="mt-20">Contrary to popular belief, Lorem Ipsum is not<br/> simply random text. It has roots in a piece of<br/> classical Latin literature from 45 BC</h1>
        </div>
        <div className="flex mt-12 lg:ml-32 ">
            <div className="lg:ml-20  ml-12  border-solid border border-stone-400 rounded-3xl w-36 h-24" >
                <h1 className="mx-14 text-orange-600 font-semibold mt-4">500+</h1><br/>
                <h1 className="ml-4 text-sm"> Holiday Package</h1>
            </div>
            <div className="ml-8 border-solid border border-stone-400 rounded-3xl w-36 h-24" >
                <h1 className="mx-14 text-orange-600 font-semibold mt-4">100</h1><br/>
                <h1 className="ml-6 text-sm"> Luxury Hotel</h1>
            </div>
            

        </div>
        <div className="flex lg:ml-32 ml-12 items-center mt-8">
            <div className="lg:ml-20  border-solid border border-stone-400 rounded-3xl w-36 h-24" >
                <h1 className="mx-16 text-orange-600 font-semibold mt-4">7</h1><br/>
                <h1 className="ml-4 text-sm"> Premium Airlines</h1>
            </div>
            <div className="ml-8 border-solid border border-stone-400 rounded-3xl w-36 h-24" >
                <h1 className="mx-14 text-orange-600 font-semibold mt-4">2k+</h1><br/>
                <h1 className="ml-4 text-sm">  Happy Customer</h1>
            </div>
            

        </div>
      </div>
    </div>
  );
};

export default Card;
