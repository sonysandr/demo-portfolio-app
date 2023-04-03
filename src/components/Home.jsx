import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f] ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#BC9C22]">Hello, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">AKS</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front end developer specializing in building and designing
          exceptional digital experiences. Currently am focused on building
          responsive web applications{" "}
        </p>
        <div>
          <button className="text-white group rounded border-2 px-2  py-3 my-2 flex items-center hover:bg-[#BC9C22] hover:border-green-600  ">
            View Work
            <span className=" group-hover:rotate-180 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
