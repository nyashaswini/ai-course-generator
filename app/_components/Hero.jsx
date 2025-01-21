import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <section className="h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-primary">
              <span className="text-black">AI Course</span> Generator
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Unlock personalized education with AI-driven course creation. Tailor your
              learning journey to fit your unique goals and pace.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href={'/dashboard'} >
             
                   <Button variant="startButton" > Get started</Button>
                   </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-12 lg:mt-0 lg:max-w-lg lg:w-full">
            <img
              src="/sign in.png"
              alt="AI Course Generator"
              className="w-full object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;
