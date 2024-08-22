import React from "react";
import Money from "../images/Money.png";
import Two from "../images/Two.png";
import Group from "../images/Group.png";

const Card = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4 flex justify-center items-center min-h-screen">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="w-[20rem] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="mx-auto w-20 mt-[-3rem] bg-white"
            src={Money}
            alt="Money"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$140</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">one Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md m-auto font-medium my-6 py-3 text-black hover:bg-black hover:text-[#00df9a] duration-300">
            Start Trial
          </button>
        </div>

        <div className=" bg-gray-100 w-[20rem] shadow-xl flex flex-col p-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="mx-auto w-20 mt-[-3rem] " src={Two} alt="Money" />
          <h2 className="text-2xl font-bold text-center py-8">Two Users</h2>
          <p className="text-center text-4xl font-bold">$340</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">two Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 50 GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md m-auto font-medium my-6 py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black duration-300 ">
            Start Trial
          </button>
        </div>

        <div className="w-[20rem] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="mx-auto w-20 mt-[-3rem] bg-white"
            src={Group}
            alt="Money"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group</h2>
          <p className="text-center text-4xl font-bold">$540</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">900 GB Storage</p>
            <p className="py-2 border-b mx-8">more that ine Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 90 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md m-auto font-medium my-6 py-3 text-black  hover:bg-black hover:text-[#00df9a] duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
