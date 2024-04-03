import Image from "next/image";
import React from "react";

const Icons = () => {
  return (
    <div className="flex  items-center lg:ml-20 ml-0 mt-[400px] lg:mt-64 ">
      <div className="lg:mt-0 mt-28">
        <Image src="/OBJECTS.png" height={100} width={50} />
      </div>
      <div className="lg-flex sm:flex items-center lg:ml-28 ml-8  mt-8">
        <Image src="/Group (1).png" height={20} width={150} className="ml-20 lg:mt-0 mt-8"/>
        <Image src="/Group 2.png" height={20} width={150} className="ml-20 lg:mt-0 mt-4"/>
        <Image src="/Group.png" height={20} width={150} className="ml-20 lg:mt-0 mt-4"/>
        <Image src="/Group 9235.png" height={20} width={150} className="ml-20 lg:mt-0 mt-4"/>
        <Image src="/Group 3.png" height={20} width={150} className="ml-20 lg:mt-0 mt-4"/>
      </div>
    </div>
  );
};

export default Icons;
