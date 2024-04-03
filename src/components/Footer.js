import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer class="py-4 lg:mt-96 mt-[700px]">
      <div class="container ">
        <ul class="lg:flex ml-20 ">
          <li>
            <div className="flex  items-center ">
              <Image src="/Vector.png" width={40} height={40} />
              <a href="#" className=" font-bold text-2xl ml-8">
                TravelLog
              </a>
            </div>
            <h1 className="mt-8  text-2xl font-light mr-72 w-72">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </h1>
            <div className="flex items-center mt-20">
            <Image src="/Vector (3).png" width={40} height={40}  />
            <Image src="/Vector (3).png" width={40} height={40} className="ml-8"/>
            <Image src="/Vector (3).png" width={40} height={40} className="ml-8"/>
            </div>
        
          </li>
          <li className="lg:ml-20 ml-12 lg:mt-0 mt-12">
            <a href="#" class="hover:text-gray-300 font-semibold">
              Home
            </a>
            <ul class=" mt-2">
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  About{" "}
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Career
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Mobile
                </a>
              </li>
            </ul>
          </li>
          <li className="lg:ml-20 ml-12 lg:mt-0 mt-12">
            <a href="#" class="hover:text-gray-300 font-semibold">
              Home
            </a>
            <ul class=" mt-2">
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  About{" "}
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Career
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Mobile
                </a>
              </li>
            </ul>
          </li>
          <li className="lg:ml-20 ml-12 lg:mt-0 mt-12">
            <a href="#" class="hover:text-gray-300 font-semibold">
              Contact
            </a>
            <ul class=" mt-2">
              <li>
                <a href="#" class="hover:text-gray-300 block">
                  Why Travlog?{" "}
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  Blog
                </a>
              </li>
            </ul>
          </li>
       
          <li className="lg:ml-20 ml-12 lg:mt-0 mt-12">
            <a href="#" class="hover:text-gray-300 font-semibold">
              Meet Us
            </a>
            <ul class="lg:mt-2">
              <li>
                <a href="#" class="hover:text-gray-300 block">
                  +00 92 1234 56789{" "}
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  info@travlog.com
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block mt-4">
                  205. R Street, New York{" "}
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-300 block">
                  BD23200
                </a>
              </li>
            </ul>
          </li>
        </ul>
       
      </div>
    </footer>
  );
};

export default Footer;
