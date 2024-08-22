import React from "react";
// import { Typed } from "react-typed";


const Step = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] pt-[96px] w-full  mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
          GROWING WITH DATA
        </h1>
        {/* <div className="flex justify-center items-center">
          <p className="font-bold p-2">Fast, flexible, financing for </p>

          <Typed 
            className="font-bold text-xl pl-2"
            strings={["BTB", "BTC", "SaaS"]}
            typeSpeed={50}
            backSpeed={80}
            loop
          />
        </div> */}
        <div className="flex justify-center items-center">
        <p className="font-bold p-2">Fast, flexible, financing for BTB, BTC, SAAS </p>
        </div>  
        <p className=" font-bold text-gray-600">monitor your data analyticas to increase revenue for BTB,BTC&SASS platform</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md m-auto font-medium my-6 md:py-3 sm:py-2 text-black ">Get started</button> 
      </div>
    </div>
  );
};

export default Step;