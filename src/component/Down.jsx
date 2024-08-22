// this is the last part of the webpage
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Down = () => {
  return (
    <div className="max-w-[600px] py-16 grid md:flex mx-auto  gap-9  lg:flex justify-between px-4 text-gray-300">
      <div className="lg:basis-1/3">
        <h1 className="w-full text-3xl  font-bold text-[#00df9a]">Chris</h1>
        <p className="w-[20rem] py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed.
        </p>
        <div className="flex space-x-4 my-6">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaGithub size={30} />
        </div>
      </div>
      <div className="lg:basis-2/3 lg:float flex gap-4 justify-between">
        <div>
          <h1 className="font-medium text-gray-400">Solution</h1>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Supports</h1>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Company</h1>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400">Legal</h1>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Down;