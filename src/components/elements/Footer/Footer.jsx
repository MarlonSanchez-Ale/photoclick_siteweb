//import React from 'react'
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className=" p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center sm:items-start justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <p className="text-2xl font-bold relative p-1 text-white">
            PhotoClick<span> 🚀</span>
          </p>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © jotredev 2022 - All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
