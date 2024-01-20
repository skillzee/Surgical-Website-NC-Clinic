import { useState } from "react";
import img1 from "../home/images/img1.jpg";
import img2 from "../home/images/img2.jpg";
import logo from "../home/images/logo.png";
import dental from "../home/images/dental.jpg";
import surgical from "../home/images/surgical.jpg";
import intro from "../home/images/intro1.jpg";
import ImageSlider from "./ImageSlider";
import innovation from "../home/images/innovation.png";
import quality from "../home/images/order.png";
import production from "../home/images/badge.png";
import professional from "../home/images/businessman.png";
import steel from "../home/images/beam.png";
import warranty from "../home/images/warranty.png";
import dilivary from "../home/images/fast.png";
import { Link } from "react-router-dom";

export default function Home() {
  const imgArr = [img1, img2];

  return (
    <div>
      <ImageSlider imageUrls={imgArr} />
      <div className="container mx-auto flex flex-row md:my-20 md:space-x-10 items-center space-x-4 px-4 text-center">
        <div className="flex-1 border-2 my-10 rounded-2xl bg-gray-200 md:hover:p-8 md:p-4 hover:p-4 ease-in-out">
          <Link to="/products">
            <img src={surgical} className="rounded-2xl my-2" alt="" />
            <span className="md:text-3xl font-bold">Surgical Instruments</span>
          </Link>
        </div>
        <div className="flex-1 border-2 rounded-2xl bg-gray-200 md:p-4 md:hover:p-8 hover:p-4 ease-in-out text-center">
          <Link to="/products">
            <img className="rounded-2xl my-2" src={dental} alt="" />
            <span className="md:text-3xl font-bold">Dental Instruments</span>
          </Link>
        </div>
      </div>
      <div className="flex container mx-auto items-center space-x-10 px-10">
        <div className="left flex-1">
          <h1 className="text-4xl font-bold my-2 text-amber-600">
            N.C Surgical
          </h1>
          <div className="right flex-1  md:hidden">
          <img className="rounded-xl my-4" src={intro} alt="" />
        </div>
          <p className="md:text-xl text-sm ">
            Founded in 1975, is proficiently producing and shipping an extensive
            assortment of tools and apparatus. Our product selection encompasses
            Surgical Instruments, Dental Tools, and Wax Carving Instruments.
          </p>
        </div>
        <div className="right flex-1 hidden md:block">
          <img className="rounded-xl" src={intro} alt="" />
        </div>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col md:space-x-8 px-20 md:my-20">
        <div className="left flex-row my-8">
          <img className="h-48 mx-auto my-4" src={innovation} alt="" />
          <p className="text-center md:text-xl text-sm">
            We are OEM (Original Equipment Manufacturer) and we know that
            something new is always welcomed to stay in the market. Our moto has
            always been innovating the ways we manufacture to reach the end user
            requirement using minimum resources.
          </p>
        </div>
        <div className="middle my-8">
          <img className="h-48 mx-auto my-4" src={production} alt="" />
          <p className="text-center md:text-xl text-sm">
            We are committed to manufacture & supply high quality products made
            with high Grade Stainless Steel materials and we are well equipped
            for both simple and comprehensive instruments and guarantee the high
            precision
          </p>
        </div>
        <div className="right my-8">
          <img className="h-48 mx-auto my-4" src={quality} alt="" />
          <p className="text-center md:text-xl text-sm">
            We never compromise on quality. We know the market and we know what
            our clients expect from us. To provide our clients what they pay
            for, we make sure to manufacture the best instruments of premium
            quality.
          </p>
        </div>
      </div>
      <div className="bg-pink-500 h-fit p-10 ">
        <h1 className="text-4xl text-center font-bold">Why choose us?</h1>
        <div className="container mx-auto flex md:flex-row flex-col my-10 md:justify-between md:px-10 text-center md:space-y-0 md:space-x-4   space-y-8">
          <div className="left">
            <img className="h-24 mx-auto my-4" src={professional} alt="" />
            <h1 className="text-2xl font-bold text-center">
              Professional Approach
            </h1>
            <span className="text-xl text-center">
              Trustworthy and reliable Team
            </span>
          </div>
          <div className="m1">
            <img className="h-24 mx-auto my-4" src={steel} alt="" />
            <h1 className="text-2xl font-bold text-center">Stainless Steel</h1>
            <span className="text-xl text-center">
              Excellent Forged Quality
            </span>
          </div>
          <div className="m2">
            <img className="h-24 mx-auto my-4" src={warranty} alt="" />
            <h1 className="text-2xl font-bold text-center">
              Lifetime Warranty
            </h1>
            <span className="text-xl text-center">
              Lifetime Quality Warranty
            </span>
          </div>
          <div className="right">
            <img className="h-24 mx-auto my-4" src={dilivary} alt="" />
            <h1 className="text-2xl font-bold text-center">On Time Shipment</h1>
            <span className="text-xl text-center">Across the Globe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
